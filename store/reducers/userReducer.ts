import {HANDLE_ERROR, SAVE_IP, SAVE_JWT_TOKEN} from '../actions/actionTypes';

const initialState = {
  error: null,
  ip: null,
  jwt_token: null,
};

interface actionShape {
  type: string;
  payload: any;
}

const User = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case HANDLE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SAVE_IP:
      return {
        ...state,
        ip: action.payload,
      };
    case SAVE_JWT_TOKEN: {
      return {
        ...state,
        jwt_token: action.payload,
      };
    }
    default:
      return state;
  }
};

export default User;
