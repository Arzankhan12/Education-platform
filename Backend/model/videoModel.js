import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    videoUrl: { type: String, required: true }, // Video file URL
    pdfUrl: { type: String, required: false }, // PDF file URL (optional)
    quizUrl: { type: String, required: false }, // Quiz file URL (optional)
    description: { type: String, required: true }, // Video description
    sequence: { type: String, required: true }, // Sequence number
    section: { type: String, required: true }, // Section name
    chapter: { type: String, required: true }, // Chapter name
  },
  { timestamps: true } // Automatically add createdAt and updatedAt
);

const Video = mongoose.model("Video", videoSchema);
export default Video;
