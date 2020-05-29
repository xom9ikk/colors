import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { ColorSection } from '../components/ColorSection';
import { GradientSection } from '../components/GradientSection';
import { IRootState } from '../store/reducers/state';
import { EnumTheme } from '../types';

export const Main: FC = () => {
  const appTheme = useSelector((state: IRootState) => state.theme);
  const theme = appTheme === EnumTheme.Dark ? 'container--dark' : 'container--light';
  return (
    <>
      <div className={`container ${theme}`}>
        <Header />
        <Route
          path="/"
          exact
          render={() => <ColorSection />}
        />
        <Route
          path="/gradients"
          exact
          render={() => <GradientSection />}
        />
      </div>

    </>
  );
};
