import React, { useState } from "react";
import { storage } from "./firebaseConfig"; // Firebase storage configuration
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AiOutlineUpload } from "react-icons/ai";

const Upload = () => {
  const [videos, setVideos] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState([]); // To track progress of each video

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    if (!files.length) return;

    setUploading(true);
    const progressArray = new Array(files.length).fill(0);
    setUploadProgress(progressArray);

    const uploadedVideos = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Ensure only videos are processed
      if (!file.type.startsWith("video")) {
        alert(`File "${file.name}" is not a video and will be skipped.`);
        continue;
      }

      const storageRef = ref(storage, `videos/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setUploadProgress((prev) => {
            const newProgress = [...prev];
            newProgress[i] = progress;
            return newProgress;
          });
        },
        (error) => {
          console.error(`Error uploading ${file.name}:`, error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          uploadedVideos.push({ url: downloadURL, name: file.name });
        }
      );
    }

    // Wait until all videos are uploaded
    setVideos((prev) => [...prev, ...uploadedVideos]);
    setUploading(false);
    setUploadProgress([]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ padding: "1rem", textAlign: "center", backgroundColor: "#282c34", color: "white" }}>
        <h1>Video Upload Dashboard</h1>
      </header>

      <main style={{ padding: "2rem" }}>
        <div style={{ marginBottom: "1rem", textAlign: "center" }}>
          <label
            htmlFor="video-upload"
            style={{
              cursor: "pointer",
              padding: "0.5rem 1rem",
              backgroundColor: "#007BFF",
              color: "white",
              borderRadius: "5px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <AiOutlineUpload style={{ marginRight: "5px" }} /> Upload Videos
          </label>
          <input
            id="video-upload"
            type="file"
            multiple
            accept="video/*"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
        </div>

        {uploading && (
          <div style={{ marginBottom: "1rem" }}>
            {uploadProgress.map((progress, index) => (
              <p key={index} style={{ textAlign: "center", color: "#007BFF" }}>
                Video {index + 1}: {progress}%
              </p>
            ))}
          </div>
        )}

        {/* Display Uploaded Videos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
          {videos.map((video, index) => (
            <div key={index} style={{ border: "1px solid #ddd", padding: "0.5rem", borderRadius: "5px" }}>
              <video src={video.url} controls style={{ width: "100%" }} />
              <p style={{ marginTop: "0.5rem", textAlign: "center" }}>{video.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Upload;
