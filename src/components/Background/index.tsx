import React, { FC } from 'react';
import { useBackground } from '../../use/background';


export const Background: FC = ({ children }) => {
  const { background } = useBackground();
  return <div className="background" style={{ background }}>{children}</div>;
};
