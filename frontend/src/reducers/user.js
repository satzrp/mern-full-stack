import { USER_LIST_REQUEST, USER_LIST_OK, USER_LIST_KO } from "./../actions/user";

export const listUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, users: [], isLoading: true };
    case USER_LIST_OK:
      return { ...state, users: action.payload, isLoading: false };
    case USER_LIST_KO:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
