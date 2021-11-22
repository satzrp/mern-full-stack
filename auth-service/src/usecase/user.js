const addUserFn = (userDb) => {
  return async (username, password) => {
    const newUser = await userDb.addUser(username, password);
    return mapDocToUser(newUser);
  };
};

const authenticateUserFn = (userDb) => {
  return async (username, password) => {
    const user = await userDb.findByUsername(username);
    const isValid = user && (await user.checkPassword(password));
    if (isValid) {
      return mapDocToUser(user);
    }
    return null;
  };
};

const findByUsernameFn = (userDb) => {
  return async (username) => {
    const user = await userDb.findByUsername(username);
    if (user) {
      return mapDocToUser(user);
    }
    return null;
  };
};

const mapDocToUser = (userDoc) => {
  if (userDoc) {
    return {
      username: userDoc.username,
    };
  }
  return userDoc;
};

export { addUserFn, authenticateUserFn, findByUsernameFn };
