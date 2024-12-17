// import express from "express";
// import { uploadVideo, getAllVideos, upload } from "../components/videoComp.js";

// const router = express.Router();

// router.post("/upload", upload.single("video"), uploadVideo); // Video upload route
// router.get("/videos", getAllVideos); // Fetch all videos route

// export default router;

import express from "express";
import { uploadVideo, getAllVideos, upload } from "../components/videoComp.js";

const router = express.Router();

// Update to handle multiple file uploads: video, pdf, and quiz
router.post("/upload", upload, uploadVideo); // File upload route
router.get("/videos", getAllVideos); // Fetch all videos route

export default router;

