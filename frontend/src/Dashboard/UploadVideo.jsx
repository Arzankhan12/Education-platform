// import React, { useState } from "react";
// import axios from "axios";
// import "./Upload.css";

// function UploadVideo() {
//   const [video, setVideo] = useState(null); // Store the selected video file
//   const [description, setDescription] = useState(""); // Store the description of the video
//   const [sequence, setSequence] = useState(""); // Store the sequence number
//   const [uploadStatus, setUploadStatus] = useState(""); // Display upload status messages
//   const [isDragging, setIsDragging] = useState(false); // State for drag-and-drop visual feedback

//   // Handle video file selection (from input or drop)
//   const handleVideoChange = (file) => {
//     if (file && file.type.startsWith("video/")) {
//       setVideo(file); // Update video state
//     } else {
//       setUploadStatus("Please upload a valid video file.");
//     }
//   };

//   // Handle drag-over event (needed to allow drop)
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   // Handle drag-leave event
//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   // Handle drop event
//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);

//     const file = e.dataTransfer.files[0]; // Get the first file from the drop event
//     handleVideoChange(file); // Pass it to the video handler
//   };

//   // Handle form submission for uploading
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form behavior

//     // Validate required fields
//     if (!video || !description || !sequence) {
//       setUploadStatus("Please fill in all fields.");
//       return;
//     }

//     // Create FormData object to send the video and other data
//     const formData = new FormData();
//     formData.append("video", video);
//     formData.append("description", description);
//     formData.append("sequence", sequence);

//     try {
//       setUploadStatus("Uploading...");

//       // Make POST request to the backend
//       const response = await axios.post(
//         "http://localhost:7000/api/videos/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setUploadStatus("Video uploaded successfully!");
//       console.log("Uploaded video data:", response.data);
//     } catch (error) {
//       console.error("Error uploading video:", error);
//       if (error.response) {
//         setUploadStatus(`Error: ${error.response.data.error}`);
//       } else {
//         setUploadStatus("An error occurred while uploading the video.");
//       }
//     }
//   };

//   return (
//     <div
//       className="upload"
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       onDrop={handleDrop}
//       style={{
//         border: isDragging ? "2px dashed #007BFF" : "2px solid transparent",
//         padding: "1rem",
//         backgroundColor: isDragging ? "#f0f8ff" : "transparent",
//         transition: "all 0.3s ease-in-out",
//       }}
//     >
//       <h2>Upload Your Video</h2>
//       <form className="upload-form" onSubmit={handleSubmit}>
//         {/* Input for video file */}
//         <div className="input-group">
//           <input
//             type="file"
//             accept="video/*"
//             id="video"
//             className="upload-input"
//             onChange={(e) => handleVideoChange(e.target.files[0])}
//             style={{ display: "none" }}
//           />
//           <label htmlFor="video" className="upload-label">
//             Select or Drag Video File Here
//           </label>
//         </div>

//         {/* Input for video description */}
//         <div className="input-group">
//           <label htmlFor="description" className="input-label">
//             Description:
//           </label>
//           <textarea
//             id="description"
//             className="upload-textarea"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Add a description for your video"
//           ></textarea>
//         </div>

//         {/* Input for sequence number */}
//         <div className="input-group">
//           <label htmlFor="sequence" className="input-label">
//             Sequence Number:
//           </label>
//           <input
//             type="number"
//             id="sequence"
//             className="upload-input"
//             value={sequence}
//             onChange={(e) => setSequence(e.target.value)}
//             placeholder="Enter the sequence number"
//           />
//         </div>

//         {/* Submit button */}
//         <button type="submit" className="upload-btn">
//           Upload
//         </button>
//       </form>

//       {/* Display upload status */}
//       {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
//     </div>
//   );
// }

// export default UploadVideo;



// import React, { useState } from "react";
// import axios from "axios";
// import "./Upload.css";

// function UploadVideo() {
//   const [video, setVideo] = useState(null); // Store the selected video file
//   const [description, setDescription] = useState(""); // Store the description of the video
//   const [sequence, setSequence] = useState(""); // Store the sequence number
//   const [chapter, setChapter] = useState(""); // New state for chapter
//   const [uploadStatus, setUploadStatus] = useState(""); // Display upload status messages
//   const [isDragging, setIsDragging] = useState(false); // State for drag-and-drop visual feedback

//   // Handle video file selection (from input or drop)
//   const handleVideoChange = (file) => {
//     if (file && file.type.startsWith("video/")) {
//       setVideo(file); // Update video state
//     } else {
//       setUploadStatus("Please upload a valid video file.");
//     }
//   };

//   // Handle drag-over event (needed to allow drop)
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   // Handle drag-leave event
//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   // Handle drop event
//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);

//     const file = e.dataTransfer.files[0]; // Get the first file from the drop event
//     handleVideoChange(file); // Pass it to the video handler
//   };

//   // Handle form submission for uploading
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form behavior

//     // Validate required fields
//     if (!video || !description || !sequence || !chapter) {
//       setUploadStatus("Please fill in all fields.");
//       return;
//     }

//     // Create FormData object to send the video and other data
//     const formData = new FormData();
//     formData.append("video", video);
//     formData.append("description", description);
//     formData.append("sequence", sequence);
//     formData.append("chapter", chapter); // Include chapter in form data

//     try {
//       setUploadStatus("Uploading...");

//       // Make POST request to the backend
//       const response = await axios.post(
//         "http://localhost:7000/api/videos/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setUploadStatus("Video uploaded successfully!");
//       console.log("Uploaded video data:", response.data);
//     } catch (error) {
//       console.error("Error uploading video:", error);
//       if (error.response) {
//         setUploadStatus(`Error: ${error.response.data.error}`);
//       } else {
//         setUploadStatus("An error occurred while uploading the video.");
//       }
//     }
//   };

//   return (
//     <div
//       className="upload"
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       onDrop={handleDrop}
//       style={{
//         border: isDragging ? "2px dashed #007BFF" : "2px solid transparent",
//         padding: "1rem",
//         backgroundColor: isDragging ? "#f0f8ff" : "transparent",
//         transition: "all 0.3s ease-in-out",
//       }}
//     >
//       <h2>Upload Your Video</h2>
//       <form className="upload-form" onSubmit={handleSubmit}>
//         {/* Input for video file */}
//         <div className="input-group">
//           <input
//             type="file"
//             accept="video/*"
//             id="video"
//             className="upload-input"
//             onChange={(e) => handleVideoChange(e.target.files[0])}
//             style={{ display: "none" }}
//           />
//           <label htmlFor="video" className="upload-label">
//             Select or Drag Video File Here
//           </label>
//         </div>

//         {/* Input for video description */}
//         <div className="input-group">
//           <label htmlFor="description" className="input-label">
//             Description:
//           </label>
//           <textarea
//             id="description"
//             className="upload-textarea"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Add a description for your video"
//           ></textarea>
//         </div>

//         {/* Input for sequence number */}
//         <div className="input-group">
//           <label htmlFor="sequence" className="input-label">
//             Sequence Number:
//           </label>
//           <input
//             type="number"
//             id="sequence"
//             className="upload-input"
//             value={sequence}
//             onChange={(e) => setSequence(e.target.value)}
//             placeholder="Enter the sequence number"
//           />
//         </div>

//         {/* Input for chapter */}
//         <div className="input-group">
//           <label htmlFor="chapter" className="input-label">
//             Chapter:
//           </label>
//           <input
//             type="text"
//             id="chapter"
//             className="upload-input"
//             value={chapter}
//             onChange={(e) => setChapter(e.target.value)}
//             placeholder="Enter the chapter name"
//           />
//         </div>

//         {/* Submit button */}
//         <button type="submit" className="upload-btn">
//           Upload
//         </button>
//       </form>

//       {/* Display upload status */}
//       {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
//     </div>
//   );
// }

// export default UploadVideo;



// import React, { useState } from "react";
// import axios from "axios";
// import "./Upload.css";


// function UploadVideo() {
//   const [step, setStep] = useState(1); // Track the current step (1 = Section, 2 = Chapter, 3 = Video)
//   const [section, setSection] = useState(""); // Section name
//   const [chapter, setChapter] = useState(""); // Chapter name
//   const [video, setVideo] = useState(null); // Video file
//   const [description, setDescription] = useState(""); // Video description
//   const [sequence, setSequence] = useState(""); // Sequence number
//   const [uploadStatus, setUploadStatus] = useState(""); // Upload status

//   // Handle video selection
//   const handleVideoChange = (file) => {
//     if (file && file.type.startsWith("video/")) {
//       setVideo(file);
//     } else {
//       setUploadStatus("Please upload a valid video file.");
//     }
//   };

//   // Handle form submission for video upload
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!video || !description || !sequence || !chapter || !section) {
//       setUploadStatus("Please fill in all fields.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("video", video);
//     formData.append("description", description);
//     formData.append("sequence", sequence);
//     formData.append("chapter", chapter);
//     formData.append("section", section);

//     try {
//       setUploadStatus("Uploading...");

//       await axios.post("http://localhost:7000/api/videos/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setUploadStatus("Video uploaded successfully!");
//       setStep(1); // Reset back to step 1
//     } catch (error) {
//       console.error("Error uploading video:", error);
//       setUploadStatus("An error occurred while uploading the video.");
//     }
//   };

//   return (
//     <div className="upload">
//       <h2>Upload Your Video</h2>

//       {/* Step 1: Section Input */}
//       {step === 1 && (
//         <div className="input-group">
//           <label htmlFor="section" className="input-label">
//             Section:
//           </label>
//           <input
//             type="text"
//             id="chapter"
//             className="upload-input"
//             value={section}
//             onChange={(e) => setSection(e.target.value)}
//             placeholder="Enter the section name"
//           />
//           <button
//             className="next-btn"
//             onClick={() => {
//               if (section) setStep(2);
//               else setUploadStatus("Please enter a section name.");
//             }}
//           >
//             Next: Add Chapter
//           </button>
//         </div>
//       )}

//       {/* Step 2: Chapter Input */}
//       {step === 2 && (
//         <div className="input-group">
//           <label htmlFor="chapter" className="input-label">
//             Chapter:
//           </label>
//           <input
//             type="text"
//             id="chapter"
//             className="upload-input"
//             value={chapter}
//             onChange={(e) => setChapter(e.target.value)}
//             placeholder="Enter the chapter name"
//           />
//           <button
//             className="prev-btn"
//             onClick={() => setStep(1)}
//           >
//             Back
//           </button>
//           <button
//             className="next-btn"
//             onClick={() => {
//               if (chapter) setStep(3);
//               else setUploadStatus("Please enter a chapter name.");
//             }}
//           >
//             Next: Upload Video
//           </button>
//         </div>
//       )}

//       {/* Step 3: Video Upload */}
//       {step === 3 && (
//         <form className="upload-form" onSubmit={handleSubmit}>
//           {/* Video File */}
//           <div className="input-group">
//             <input
//               type="file"
//               accept="video/*"
//               id="video"
//               className="upload-input"
//               onChange={(e) => handleVideoChange(e.target.files[0])}
//               style={{ display: "none" }}
//             />
//             <label htmlFor="video" className="upload-label">
//               Select Video File
//             </label>
//           </div>

//           {/* Sequence Input */}
//           <div className="input-group">
//             <label htmlFor="sequence" className="input-label">
//               Sequence Number:
//             </label>
//             <input
//               type="number"
//               id="sequence"
//               className="upload-input"
//               value={sequence}
//               onChange={(e) => setSequence(e.target.value)}
//               placeholder="Enter the sequence number"
//             />
//           </div>

//           {/* Description */}
//           <div className="input-group">
//             <label htmlFor="description" className="input-label">
//               Description:
//             </label>
//             <textarea
//               id="description"
//               className="upload-textarea"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Add a description for your video"
//             ></textarea>
//           </div>

//           {/* Submit Buttons */}
//           <button
//             className="prev-btn"
//             type="button"
//             onClick={() => setStep(2)}
//           >
//             Back
//           </button>
//           <button type="submit" className="upload-btn">
//             Upload
//           </button>
//         </form>
//       )}

//       {/* Upload Status */}
//       {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
//     </div>
//   );
// }

// export default UploadVideo;



import React, { useState } from "react";
import axios from "axios";
import "./Upload.css";

function UploadVideo() {
  const [step, setStep] = useState(1); // Track the current step (1 = Section, 2 = Chapter, 3 = Upload)
  const [section, setSection] = useState(""); // Section name
  const [chapter, setChapter] = useState(""); // Chapter name
  const [video, setVideo] = useState(null); // Video file
  const [pdf, setPdf] = useState(null); // PDF file
  const [quiz, setQuiz] = useState(null); // Quiz file
  const [description, setDescription] = useState(""); // Video description
  const [sequence, setSequence] = useState(""); // Sequence number
  const [uploadStatus, setUploadStatus] = useState(""); // Upload status

  // Handle file selection
  const handleFileChange = (file, type) => {
    if (file) {
      if (type === "video" && file.type.startsWith("video/")) {
        setVideo(file);
      } else if (type === "pdf" && file.type === "application/pdf") {
        setPdf(file);
      } else if (type === "quiz" && file.type === "application/json") {
        setQuiz(file);
      } else {
        setUploadStatus(`Invalid file type for ${type}.`);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video || !description || !sequence || !chapter || !section) {
      setUploadStatus("Please fill in all fields and upload a video file.");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);
    if (pdf) formData.append("pdf", pdf);
    if (quiz) formData.append("quiz", quiz);
    formData.append("description", description);
    formData.append("sequence", sequence);
    formData.append("chapter", chapter);
    formData.append("section", section);

    try {
      setUploadStatus("Uploading...");

      await axios.post("http://localhost:7000/api/videos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadStatus("Files uploaded successfully!");
      setStep(1); // Reset back to step 1
    } catch (error) {
      console.error("Error uploading files:", error);
      setUploadStatus("An error occurred while uploading the files.");
    }
  };

  return (
    <div className="upload">
      <h2>Upload Your Content</h2>

      {/* Step 1: Section Input */}
      {step === 1 && (
        <div className="input-group">
          <label htmlFor="section" className="input-label">
            Section:
          </label>
          <input
            type="text"
            id="chapter"
            className="upload-input"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="Enter the section name"
          />
          <button
            className="next-btn"
            onClick={() => {
              if (section) setStep(2);
              else setUploadStatus("Please enter a section name.");
            }}
          >
            Next: Add Chapter
          </button>
        </div>
      )}

      {/* Step 2: Chapter Input */}
      {step === 2 && (
        <div className="input-group">
          <label htmlFor="chapter" className="input-label">
            Chapter:
          </label>
          <input
            type="text"
            id="chapter"
            className="upload-input"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            placeholder="Enter the chapter name"
          />
          <button className="prev-btn" onClick={() => setStep(1)}>
            Back
          </button>
          <button
            className="next-btn"
            onClick={() => {
              if (chapter) setStep(3);
              else setUploadStatus("Please enter a chapter name.");
            }}
          >
            Next: Upload Files
          </button>
        </div>
      )}

      {/* Step 3: File Upload */}
      {step === 3 && (
        <form className="upload-form" onSubmit={handleSubmit}>
          {/* Video File */}
          <div className="input-group">
            <input
              type="file"
              accept="video/*"
              id="video"
              className="upload-input"
              onChange={(e) => handleFileChange(e.target.files[0], "video")}
              style={{ display: "none" }}
            />
            <label htmlFor="video" className="upload-label">
              Select Video File
            </label>
          </div>

          {/* PDF File */}
          <div className="input-group">
            <input
              type="file"
              accept="application/pdf"
              id="pdf"
              className="upload-input"
              onChange={(e) => handleFileChange(e.target.files[0], "pdf")}
              style={{ display: "none" }}
            />
            <label htmlFor="pdf" className="upload-label">
              Select PDF File (Optional)
            </label>
          </div>

          {/* Quiz File */}
          <div className="input-group">
            <input
              type="file"
              accept="application/json"
              id="quiz"
              className="upload-input"
              onChange={(e) => handleFileChange(e.target.files[0], "quiz")}
              style={{ display: "none" }}
            />
            <label htmlFor="quiz" className="upload-label">
              Select Quiz File (JSON) (Optional)
            </label>
          </div>

          {/* Sequence Input */}
          <div className="input-group">
            <label htmlFor="sequence" className="input-label">
              Sequence Number:
            </label>
            <input
              type="number"
              id="sequence"
              className="upload-input"
              value={sequence}
              onChange={(e) => setSequence(e.target.value)}
              placeholder="Enter the sequence number"
            />
          </div>

          {/* Description */}
          <div className="input-group">
            <label htmlFor="description" className="input-label">
              Description:
            </label>
            <textarea
              id="description"
              className="upload-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description for your video"
            ></textarea>
          </div>

          {/* Submit Buttons */}
          <button className="prev-btn" type="button" onClick={() => setStep(2)}>
            Back
          </button>
          <button type="submit" className="upload-btn">
            Upload
          </button>
        </form>
      )}

      {/* Upload Status */}
      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
    </div>
  );
}

export default UploadVideo;


