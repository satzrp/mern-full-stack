import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { listUsersReducer } from "./reducers/user";
import { userLoginReducer, userRegisterReducer } from "./reducers/auth";

const combinedReducers = combineReducers({
  listUsers: listUsersReducer,
  login: userLoginReducer,
  register: userRegisterReducer,
});

const loggedInUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = { login: { user: loggedInUser } };
const store = createStore(combinedReducers, initialState, applyMiddleware(thunk));

export default store;
