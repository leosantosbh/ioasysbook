/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function loginRequest(user: string, pass: string) {
  return {
    type: '@auth/loginRequest',
    payload: { user, pass },
  };
}

export function loginSuccess(token: string, refreshToken: string) {
  return {
    type: '@auth/loginSuccess',
    payload: { token, refreshToken },
  };
}

export function newTokenRequest(token: string, refreshToken: string) {
  return {
    type: '@auth/newToken',
    payload: { token, refreshToken },
  };
}

export function logoutRequest() {
  return {
    type: '@auth/logoutRequest',
  };
}
