/* eslint-disable no-fallthrough */
import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  refreshToken: null,
  loading: false,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/loginRequest': {
        draft.loading = true;
        break;
      }
      case '@auth/loginSuccess': {
        draft.token = action.payload.token;
        draft.refreshToken = action.payload.refreshToken;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/logoutRequest': {
        draft.token = null;
        draft.refreshToken = null;
        draft.loading = false;
        draft.signed = false;
        break;
      }
      case '@auth/newToken': {
        draft.loading = true;
      }
      default: {
        break;
      }
    }
  });
}
