import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IRootState } from '../store/reducers/state';
import { EnumTheme } from '../types';


export const useBackground = () => {
  const theme = useSelector((state: IRootState) => state.theme);
  const currentColor = useSelector((state: IRootState) => state.palette.currentColor);
  const currentGradient = useSelector((state: IRootState) => state.palette.currentGradient);

  const [background, setBackground] = useState<string>();

  const hexOpacity = theme === EnumTheme.Light ? '0f' : '03';

  useEffect(() => {
    setBackground(`${currentColor}${hexOpacity}`);
  }, [currentColor]);

  useEffect(() => {
    const gradient = `linear-gradient(${currentGradient.deg}deg, ${currentGradient.start + hexOpacity}, ${currentGradient.end + hexOpacity})`;
    setBackground(gradient);
  }, [currentGradient]);
  console.log('back', background);
  return {
    background,
  };
};
