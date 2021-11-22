import asyncHandler from "express-async-handler";
import userService from "./usecase/index.js";

const findAll = asyncHandler(async (req, res) => {
  const users = await userService.findAll();
  res.status(200).json(users);
});

const findUserById = asyncHandler(async (req, res) => {
  const user = await userService.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const addUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, age } = req.body;
  const user = await userService.addUser(firstName, lastName, age);
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(500);
    throw new Error("Error in adding user");
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName, age } = req.body;
  const updatedUser = await userService.updateUser(userId, firstName, lastName, age);
  if (updatedUser) {
    res.status(200).json({ message: "User updated successfully" });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const deletedUser = await userService.deleteUser(userId);
  if (deletedUser) {
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

export { findAll, findUserById, addUser, updateUser, deleteUser };
