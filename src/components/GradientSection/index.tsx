import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import copy from 'copy-text-to-clipboard';
import { ColorCard } from '../ColorCard';
import { Controls } from '../Controls';
import { IRootState } from '../../store/reducers/state';
import { PaletteActions } from '../../store/actions';
import { IGradient } from '../../types';

export const GradientSection: FC = () => {
  const dispatch = useDispatch();
  const palette = useSelector(((state: IRootState) => state.palette));
  const { currentGradient } = palette;
  const handleGenerate = (generatedGradient: IGradient) => {
    dispatch(PaletteActions.addGradient(generatedGradient));
  };
  const handleBack = () => {
    dispatch(PaletteActions.popGradient());
  };
  const handleCopy = () => {
    const gradient = `linear-gradient(${currentGradient.deg}deg, ${currentGradient.start}, ${currentGradient.end})`;
    copy(gradient);
  };
  return (
    <main className="color-section">
      <ColorCard gradientColor={palette.currentGradient} />
      <Controls
        onGenerate={handleGenerate}
        onBack={handleBack}
        onCopy={handleCopy}
        isGradient
      />
    </main>
  );
};
