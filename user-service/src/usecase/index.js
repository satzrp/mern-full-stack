import { addUserFn, findAllFn, findByIdFn, updateUserFn, deleteUserFn } from "./user.js";
import * as userDb from "./../store/user.js";

const addUser = addUserFn(userDb);
const findAll = findAllFn(userDb);
const findById = findByIdFn(userDb);
const updateUser = updateUserFn(userDb);
const deleteUser = deleteUserFn(userDb);

const userService = Object.freeze({ addUser, findAll, findById, updateUser, deleteUser });

export default userService;
