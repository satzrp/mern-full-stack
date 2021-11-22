import express from "express";
import { authenticateUser, registerUser, verifyToken } from "./controller.js";
const router = express.Router();

router.post("/login", authenticateUser);
router.post("/register", registerUser);
router.get("/verify", verifyToken);

export default router;
