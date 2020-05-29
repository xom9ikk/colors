import React, { FC, useState } from 'react';
import { ColorCard } from '../ColorCard';
import { Controls } from '../Controls';

export const ColorSection: FC = () => {
  const [color, setColor] = useState('#8E7685');
  const handleGenerate = (generatedColor: string) => {
    setColor(generatedColor);
  };
  const handleBack = () => {

  };
  const handleCopy = () => {
    console.log(color);
  };
  return (
    <main className="color-section">
      <ColorCard color={color} />
      <Controls
        onGenerate={handleGenerate}
        onBack={handleBack}
        onCopy={handleCopy}
      />
    </main>
  );
};
