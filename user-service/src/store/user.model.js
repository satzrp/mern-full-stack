import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: Number, unique: true, required: true, index: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: true, default: Date.now() },
  isDeleted: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

export default User;
