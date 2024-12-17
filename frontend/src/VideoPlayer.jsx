import React from "react";
import "./VideoPlayer.css";

function VideoPlayer({ video, onClose }) {
  return (
    <div className="video-player-overlay">
      <div className="video-player-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <video
          src={`http://localhost:7000${video.videoUrl}`}
          controls
          autoPlay
          className="video-full-player"
        />
        <div className="video-details">
          <p><strong>Description:</strong> {video.description}</p>
          <p><strong>Sequence:</strong> {video.sequence}</p>
          <p><strong>Uploaded At:</strong> {new Date(video.createdAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
