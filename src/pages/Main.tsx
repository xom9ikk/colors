import React, { FC, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { ColorSection } from '../components/ColorSection';
import { GradientSection } from '../components/GradientSection';
import { IRootState } from '../store/reducers/state';
import { EnumTheme } from '../types';
import { ThemeEffects } from '../store/effects';

export const Main: FC = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector((state: IRootState) => state.theme);
  const theme = appTheme === EnumTheme.Dark ? 'container--dark' : 'container--light';
  useEffect(() => {
    dispatch(ThemeEffects.restoreTheme());
  }, [dispatch]);

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
