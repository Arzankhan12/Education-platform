// import multer from "multer";
// import path from "path";
// import Video from "../model/videoModel.js";

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads"); // Folder to store uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to filename
//   },
// });

// export const upload = multer({ storage: storage });

// // Handle video upload
// export const uploadVideo = async (req, res) => {
//   const { description, sequence,chapter,section } = req.body;
//   const video = req.file;

//   if (!video || !description || !sequence ||!chapter ||!section) {
//     return res.status(400).json({ error: "Please provide all required fields." });
//   }

//   try {
//     const newVideo = new Video({
//       videoUrl: `/uploads/${video.filename}`,
//       description,
//       sequence,
//       chapter,section
//     });

//     await newVideo.save();

//     res.status(200).json({
//       message: "Video uploaded successfully!",
//       data: newVideo,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to upload video." });
//   }
// };

// export const getAllVideos = async (req, res) => {
//   try {
//     const videos = await Video.find(); // Fetch all videos from the database
//     res.status(200).json({ videos });
//   } catch (error) {
//     console.error("Error fetching videos:", error);
//     res.status(500).json({ error: "Failed to fetch videos." });
//   }
// };
import multer from "multer";
import path from "path";
import Video from "../model/videoModel.js";

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Folder to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to filename
  },
});

// Allow multiple file uploads for video, pdf, and quiz
export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /video\/|application\/pdf|text\/csv/;
    if (allowedFileTypes.test(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only videos, PDFs, and quizzes are allowed."), false);
    }
  },
}).fields([
  { name: "video", maxCount: 1 },
  { name: "pdf", maxCount: 1 },
  { name: "quiz", maxCount: 1 },
]);

// Handle video, pdf, and quiz upload
export const uploadVideo = async (req, res) => {
  const { description, sequence, chapter, section } = req.body;

  const videoFile = req.files["video"] ? req.files["video"][0] : null;
  const pdfFile = req.files["pdf"] ? req.files["pdf"][0] : null;
  const quizFile = req.files["quiz"] ? req.files["quiz"][0] : null;

  // Validate required fields
  if (!videoFile || !description || !sequence || !chapter || !section) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields including video file." });
  }

  try {
    const newVideo = new Video({
      videoUrl: `/uploads/${videoFile.filename}`, // Video file URL
      pdfUrl: pdfFile ? `/uploads/${pdfFile.filename}` : null, // PDF file URL
      quizUrl: quizFile ? `/uploads/${quizFile.filename}` : null, // Quiz file URL
      description,
      sequence,
      chapter,
      section,
    });

    await newVideo.save();

    res.status(200).json({
      message: "Files uploaded successfully!",
      data: newVideo,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Failed to upload files." });
  }
};

// Get all videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find(); // Fetch all videos from the database
    res.status(200).json({ videos });
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ error: "Failed to fetch videos." });
  }
};


