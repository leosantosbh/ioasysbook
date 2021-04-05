import produce from 'immer';

const INITIAL_STATE = {
  user: null,
  pass: null,
  userData: null,
};

export default function user(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/setSaveUserData': {
        draft.userData = action.payload.userData;
        break;
      }
      case '@user/setSaveLogin': {
        draft.user = action.payload.user;
        draft.pass = action.payload.pass;
        break;
      }
      case '@user/clearLogin': {
        draft.userData = null;
        draft.user = null;
        draft.pass = null;
        break;
      }
      default:
        break;
    }
  });
}
