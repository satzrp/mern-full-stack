import asyncHandler from "express-async-handler";
import axios from "axios";

const AUTH_URL = process.env.AUTH_URL;

const isAuthenticated = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    const response = await axios.get(AUTH_URL, {
      headers: {
        authorization: req.headers.authorization,
      },
    });
    if (response.data && response.data.verified === true) {
      next();
    } else {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { isAuthenticated };
