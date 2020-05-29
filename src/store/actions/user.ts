import { createAction } from 'redux-actions';
import {IUser} from "../../types";

enum Type {
  SET_USER = 'USER/SET_USER',
}

const setUser = createAction(
  Type.SET_USER,
  (payload: IUser) => ({ data: payload }),
);

export const UserActions = {
  Type,
  setUser,
};
