import User from "./user.model.js";

const findByUsername = async (username) => {
  const user = await User.findOne({ username });
  return user;
};

const addUser = async (username, password) => {
  const newUser = new User({ username, password });
  await newUser.save();
  return newUser;
};

export { findByUsername, addUser };
