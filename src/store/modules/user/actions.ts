/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { UserData } from '../../models.types';

export function saveUserData(userData: UserData) {
  return {
    type: '@user/setSaveUserData',
    payload: { userData },
  };
}

export function saveLogin(user: string, pass: string) {
  return {
    type: '@user/setSaveLogin',
    payload: { user, pass },
  };
}

export function clearLogin() {
  return {
    type: '@user/clearLogin',
  };
}
