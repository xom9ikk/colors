import React, { FC } from 'react';

interface IControls {
  onGenerate: (generatedColor: string)=>void,
  onBack: ()=>void,
  onCopy: ()=>void,
}

export const Controls: FC<IControls> = () => (
  <div className="controls">
    <button className="controls--button controls--generate">
      <img src="/svg/refresh.svg" alt="refresh" />
      Generate
    </button>
    <button className="controls--button controls--back">
      <img src="/svg/back.svg" alt="back" />
      Back
    </button>
    <button className="controls--button controls--copy">
      <img src="/svg/copy.svg" alt="copy" />
      Copy Hex
    </button>
  </div>
);
