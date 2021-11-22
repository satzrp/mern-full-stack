import User from "./user.model.js";

const findAll = async () => {
  const users = await User.find({ isDeleted: false });
  return users;
};

const findById = async (id) => {
  const user = await User.findOne({ id, isDeleted: false });
  return user;
};

const addUser = async (firstName, lastName, age) => {
  const id = (await User.find({}).count()) + 1;
  const newUser = new User({ id, firstName, lastName, age });
  await newUser.save();
  return newUser;
};

const updateUser = async (id, firstName, lastName, age) => {
  const user = await User.findOneAndUpdate(
    { id, isDeleted: false },
    { firstName, lastName, age, updatedAt: Date.now() },
    { returnDocument: "after" }
  );
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findOneAndUpdate({ id }, { isDeleted: true }, { returnDocument: "after" });
  return user;
};

export { addUser, findAll, findById, updateUser, deleteUser };
