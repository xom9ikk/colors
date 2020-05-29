import { handleActions } from 'redux-actions';
import { PaletteActions } from '../actions';
import { IPalette } from '../../types';

const initialState: IPalette = {
  currentColor: '',
  colors: [],
  currentGradient: {
    start: '',
    end: '',
    deg: 0,
  },
  gradients: [],
};

export const PaletteReducer = handleActions<IPalette, IPalette>({
  [PaletteActions.Type.ADD_COLOR]:
        (state, action) => ({
          ...state,
          currentColor: action.payload.currentColor,
          colors: [...state.colors, action.payload.currentColor],
        }),
  [PaletteActions.Type.POP_COLOR]:
        (state) => ({
          ...state,
          currentColor: state.colors.pop() || state.currentColor,
          colors: [...state.colors],
        }),
  [PaletteActions.Type.ADD_GRADIENT]:
        (state, action) => ({
          ...state,
          currentGradient: action.payload.currentGradient,
          gradients: [...state.gradients, action.payload.currentGradient],
        }),
  [PaletteActions.Type.POP_GRADIENT]:
        (state) => ({
          ...state,
          currentGradient: state.gradients.pop() || state.currentGradient,
          gradients: [...state.gradients],
        }),
}, initialState);
