import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import copy from 'copy-text-to-clipboard';
import { ColorCard } from '../ColorCard';
import { Controls } from '../Controls';
import { IRootState } from '../../store/reducers/state';
import { PaletteActions } from '../../store/actions';

export const ColorSection: FC = () => {
  const dispatch = useDispatch();
  const palette = useSelector(((state: IRootState) => state.palette));
  const handleGenerate = (generatedColor: string) => {
    dispatch(PaletteActions.addColor(generatedColor));
  };
  const handleBack = () => {
    dispatch(PaletteActions.popColor());
  };
  const handleCopy = () => {
    copy(palette.currentColor);
  };
  return (
    <section className="color-section">
      <ColorCard color={palette.currentColor} />
      <Controls
        onGenerate={handleGenerate}
        onBack={handleBack}
        onCopy={handleCopy}
      />
    </section>
  );
};
