import { addUserFn, authenticateUserFn, findByUsernameFn } from "./user.js";
import * as userDb from "./../store/user.js";

const addUser = addUserFn(userDb);
const authenticateUser = authenticateUserFn(userDb);
const findByUsername = findByUsernameFn(userDb);
const authService = Object.freeze({ addUser, authenticateUser, findByUsername });

export default authService;
