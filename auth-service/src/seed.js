import { addUser } from "./store/user.js";

const users = [{ username: "demo", password: "demo" }];

export const seedData = async () => {
  users.forEach(async (user) => {
    await addUser(user.username, user.password);
  });
};
