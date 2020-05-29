import { handleActions } from 'redux-actions';
import { UserActions } from '../actions';
import { IUser } from '../../types';

const initialState: IUser = {};

export const UserReducer = handleActions<IUser, IUser>({
  // [UserActions.Type.SET_USER]:
  //     (state, action) => ({ ...state, data: action.payload.data }),
}, initialState);
