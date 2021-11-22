import { addUser } from "./store/user.js";

const users = [
  { firstName: "John", lastName: "Doe", age: 30 },
  { firstName: "Jake", lastName: "Wright", age: 31 },
  { firstName: "James", lastName: "Smith", age: 32 },
  { firstName: "Apple", lastName: "Seed", age: 33 },
  { firstName: "Kate", lastName: "Williams", age: 34 },
  { firstName: "Emma", lastName: "Doe", age: 38 },
  { firstName: "Laila", lastName: "Long", age: 29 },
];

export const seedData = async () => {
  for (let user of users) {
    const newUser = await addUser(user.firstName, user.lastName, user.age);
    console.log("added: ", newUser);
  }
};
