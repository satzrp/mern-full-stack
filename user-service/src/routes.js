import express from "express";
import { findAll, findUserById, addUser, deleteUser, updateUser } from "./controller.js";
import { isAuthenticated } from "./middlewares/auth.js";

const router = express.Router();

router.route("/").get(isAuthenticated, findAll);
router.route("/").post(isAuthenticated, addUser);
router
  .route("/:id")
  .get(isAuthenticated, findUserById)
  .put(isAuthenticated, updateUser)
  .delete(isAuthenticated, deleteUser);

export default router;
