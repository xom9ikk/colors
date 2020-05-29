import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { EnumTheme, IGradient } from '../../types';
import { IRootState } from '../../store/reducers/state';

interface ICard {
  color?: string,
  gradientColor?: IGradient,
}

export const ColorCard: FC<ICard> = ({ color, gradientColor }) => {
  const appTheme = useSelector((state: IRootState) => state.theme);
  const isDark = appTheme === EnumTheme.Dark;
  const style = {
    background: color || `linear-gradient(${gradientColor?.deg}deg, ${gradientColor?.start}, ${gradientColor?.end})`,
  };

  return (
    <div className="card">
      <div className="card__color" style={style} />
      {
            !gradientColor ? (
              <span className="card__text">
                {color}
              </span>
            ) : (
              <span className="card__gradient">
                <span className="card__gradient-text">
                  {gradientColor.start}
                  <img src={isDark ? '/svg/triangle-white.svg' : '/svg/triangle.svg'} alt="triangle" />
                  {gradientColor.end}
                </span>
                <span className="card__gradient-deg">
                  {gradientColor.deg}
                  °
                </span>
              </span>
            )
        }
      <span className="card__text" />
    </div>
  );
};
