import asyncHandler from "express-async-handler";
import authService from "./usecase/index.js";
import { generateToken, decodeToken } from "./utils/token.js";

const authenticateUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await authService.authenticateUser(username, password);
  if (user) {
    res.status(200).json({ username, token: generateToken(username) });
  } else {
    res.status(401);
    throw new Error("Invalid username/password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await authService.addUser(username, password);
  if (user) {
    res.status(200).json({ username, accessToken: generateToken(username) });
  } else {
    res.status(403);
    throw new Error("Error in registering new user");
  }
});

const verifyToken = asyncHandler(async (req, res) => {
  console.log(req.headers);
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = decodeToken(token);
      const user = await authService.findByUsername(decoded.username);
      if (user) {
        res.status(200).json({ ...user, verified: true });
      }
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { authenticateUser, registerUser, verifyToken };
