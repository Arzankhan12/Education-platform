import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";
import "./ShowVideos.css";

function ShowUploadedVideos() {
  const [videos, setVideos] = useState([]); // Store fetched videos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null); // Track selected video
  const [expandedSections, setExpandedSections] = useState({}); // Track expanded sections
  const [expandedChapters, setExpandedChapters] = useState({}); // Track expanded chapters

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:7000/api/videos/videos");
        setVideos(response.data.videos);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to fetch videos. Please try again later.");
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Handle video selection
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  // Close video player
  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  // Toggle section visibility
  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Toggle chapter visibility
  const toggleChapter = (chapter) => {
    setExpandedChapters((prevState) => ({
      ...prevState,
      [chapter]: !prevState[chapter],
    }));
  };

  // Group videos by Section -> Chapter
  const groupedVideos = videos.reduce((acc, video) => {
    const section = video.section || "Uncategorized"; // Default section name
    const chapter = video.chapter || "Uncategorized";

    if (!acc[section]) {
      acc[section] = {};
    }
    if (!acc[section][chapter]) {
      acc[section][chapter] = [];
    }

    acc[section][chapter].push(video);
    return acc;
  }, {});

  return (
    <div className="videos-container">
      <h2>Uploaded Videos</h2>

      {loading && <p>Loading videos...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && Object.keys(groupedVideos).length > 0 && (
        <div className="sections-grid">
          {/* Loop through sections */}
          {Object.keys(groupedVideos).map((section) => (
            <div key={section} className="section-section">
              {/* Section Header */}
              <h2
                className="section-title"
                onClick={() => toggleSection(section)}
                style={{ cursor: "pointer" }}
              >
                {section} {expandedSections[section] ? "▼" : "▶"}
              </h2>

              {/* Display Chapters if Section is expanded */}
              {expandedSections[section] && (
                <div className="chapters-grid">
                  {Object.keys(groupedVideos[section]).map((chapter) => (
                    <div key={chapter} className="chapter-section">
                      {/* Chapter Header */}
                      <h3
                        className="chapter-title"
                        onClick={() => toggleChapter(chapter)}
                        style={{ cursor: "pointer", marginLeft: "20px" }}
                      >
                        {chapter} {expandedChapters[chapter] ? "▼" : "▶"}
                      </h3>

                      {/* Display Videos if Chapter is expanded */}
                      {expandedChapters[chapter] && (
                        <div className="videos-grid" style={{ marginLeft: "40px" }}>
                          {groupedVideos[section][chapter]
                            .sort((a, b) => a.sequence - b.sequence) // Sort by sequence
                            .map((video) => (
                              <div
                                className="video-card"
                                key={video._id}
                                onClick={() => handleVideoClick(video)} // Open video player
                              >
                                <video
                                  src={`http://localhost:7000${video.videoUrl}`}
                                  className="video-player"
                                  muted
                                />
                                <div className="video-info">
                                  <p>
                                    <strong>Description:</strong>{" "}
                                    {video.description || "No description available"}
                                  </p>
                                  <p>
                                    <strong>Sequence:</strong>{" "}
                                    {video.sequence || "No sequence number available"}
                                  </p>
                                  <p>
                                    <strong>Uploaded At:</strong>{" "}
                                    {new Date(video.createdAt).toLocaleString()}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {Object.keys(groupedVideos).length === 0 && !loading && (
        <p>No videos available.</p>
      )}

      {/* Video Player */}
      {selectedVideo && (
        <VideoPlayer video={selectedVideo} onClose={closeVideoPlayer} />
      )}
    </div>
  );
}

export default ShowUploadedVideos;
