const addUserFn = (userDb) => {
  return async (firstName, lastName, age) => {
    const newUser = await userDb.addUser(firstName, lastName, age);
    return mapDocToUser(newUser);
  };
};

const findAllFn = (userDb) => {
  return async () => {
    const users = await userDb.findAll();
    return users.map((user) => mapDocToUser(user));
  };
};

const findByIdFn = (userDb) => {
  return async (id) => {
    const user = await userDb.findById(id);
    return mapDocToUser(user);
  };
};

const updateUserFn = (userDb) => {
  return async (id, firstName, lastName, age) => {
    const updatedUser = await userDb.updateUser(id, firstName, lastName, age);
    return mapDocToUser(updatedUser);
  };
};

const deleteUserFn = (userDb) => {
  return async (id) => {
    const deletedUser = await userDb.deleteUser(id);
    return mapDocToUser(deletedUser);
  };
};

const mapDocToUser = (userDoc) => {
  if (userDoc) {
    return {
      id: userDoc.id,
      firstName: userDoc.firstName,
      lastName: userDoc.lastName,
      age: userDoc.age,
    };
  }
  return userDoc;
};

export { addUserFn, findAllFn, findByIdFn, updateUserFn, deleteUserFn };
