import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_OK,
  USER_LOGIN_KO,
  USER_REGISTER_REQUEST,
  USER_REGISTER_OK,
  USER_REGISTER_KO,
} from "./../actions/auth";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { isLoading: true };
    case USER_LOGIN_OK:
      return { user: action.payload, isLoading: false };
    case USER_LOGIN_KO:
      return { error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { isLoading: true };
    case USER_REGISTER_OK:
      return { user: action.payload, isLoading: false };
    case USER_REGISTER_KO:
      return { error: action.payload, isLoading: false };
    default:
      return state;
  }
};
