import React, { FC, useEffect, useState } from 'react';
import { useGenerate } from '../../use/generate';

interface IControls {
  onGenerate: (generatedColor: any)=>void,
  onBack: ()=>void,
  onCopy: ()=>void,
  isGradient?: boolean,
}

export const Controls: FC<IControls> = ({
  onGenerate, onBack,
  onCopy, isGradient,
}) => {
  const { hex, deg } = useGenerate();
  const [isCopied, setIsCopied] = useState(false);
  const generateHandler = () => {
    if (!isGradient) {
      return onGenerate(hex());
    }
    return onGenerate({
      start: hex(),
      end: hex(),
      deg: deg(),
    });
  };

  useEffect(() => {
    generateHandler();
  }, []);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }, [isCopied]);

  return (
    <div className="controls">
      <button
        className="controls--button controls--generate"
        onClick={generateHandler}
      >
        <img src="/svg/refresh.svg" alt="refresh" />
        Generate
      </button>
      <button
        className="controls--button controls--back"
        onClick={onBack}
      >
        <img src="/svg/back.svg" alt="back" />
        Back
      </button>
      <button
        className="controls--button controls--copy"
        onClick={() => {
          setIsCopied(true);
          onCopy();
        }}
      >
        {
          isCopied ? (
            <>
              <img src="/svg/tick.svg" alt="tick" />
              Copied!
            </>
          ) : (
            <>
              <img src="/svg/copy.svg" alt="copy" />
              {
                  isGradient ? 'Copy CSS' : 'Copy HEX'
              }
            </>
          )
        }
      </button>
    </div>
  );
};
