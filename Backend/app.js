import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import router from "./routes/router.js";
import videoRouter from "./routes/videoRouter.js";
import fs from "fs"; // File system module
import path from "path";
import { fileURLToPath } from "url"; // Required for ES module directory resolution

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Workaround for `__dirname` in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Ensure the 'uploads' folder exists
const uploadsFolder = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsFolder)) {
  fs.mkdirSync(uploadsFolder, { recursive: true }); // Create folder if it doesn't exist
  console.log("Uploads folder created.");
}

// Connect to the database
db();

// Serve static files for video uploads
app.use("/uploads", express.static(uploadsFolder));

// API routes
app.use("/api", router); // User routes
app.use("/api/videos", videoRouter); // Video routes

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
