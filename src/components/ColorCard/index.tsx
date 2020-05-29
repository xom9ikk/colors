import React, { FC } from 'react';

interface ICard {
  color?: string,
  gradientColor?: {
    deg: Number,
    start: string,
    end: string,
  },
}

export const ColorCard: FC<ICard> = ({ color, gradientColor }) => {
  const style = {
    background: color || `linear-gradient(${gradientColor?.deg}deg, ${gradientColor?.start}, ${gradientColor?.end})`,
  };
  return (
    <div className="card">
      <div className="card--color" style={style} />
      <div className="card--text">
        {color}
      </div>
    </div>
  );
};
