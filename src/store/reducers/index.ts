import { combineReducers } from 'redux';
import { IRootState } from './state';
import { UserReducer } from './user';

export const rootReducer = combineReducers<IRootState>({
  user: UserReducer as any,
});
