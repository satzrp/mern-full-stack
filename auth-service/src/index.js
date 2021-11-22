import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDatabase } from "./store/config.js";
import { notFound, errorHandler } from "./middlewares/error.js";
import authRoutes from "./routes.js";
import { seedData } from "./seed.js";
// establish database connection
await connectDatabase();
// load sample data
await seedData();
const app = express();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("tiny"));
}
app.use("/api/auth", authRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Application listening on port: ${PORT}`));
