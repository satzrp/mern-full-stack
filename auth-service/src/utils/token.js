import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "thisisasecret";

const generateToken = (username) => {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: "1d" });
};

const decodeToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    return decodedToken;
  } catch (error) {
    throw new Error("Not authorized, token failed");
  }
};

export { generateToken, decodeToken };
