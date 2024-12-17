import React from "react";
import "./Course.css";

function Course() {
  return (
    <div className="course-container">
      {/* Header Section */}
      <div className="header-section">
        {/* Video Thumbnail */}
        <div className="video-preview">
          <div className="video-placeholder">
            <button className="play-button">▶</button>
          </div>
        </div>
        
        {/* Course Information */}
        <div className="course-info">
          <h1>Web Design for Web Developers: Build Beautiful Websites!</h1>
          <p className="course-description">
            Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — 
            tons of amazing web design resources included!
          </p>
          <div className="course-details">
            <span className="badge">Free tutorial</span>
            <span className="rating">4.5 ★</span>
            <span className="students">772,055 students</span>
            <span className="duration">46min of on-demand video</span>
          </div>
          <button className="enroll-button">Enroll now</button>
        </div>
      </div>

      {/* "What You'll Learn" Section */}
      <div className="what-you-learn">
        <h2>What you'll learn</h2>
        <ul>
          <li>25+ guidelines of amazing web design: simple rules and guidelines.</li>
          <li>
            Free access to the course e-book "Best Resources for Web Design and 
            Development with HTML5 & CSS3".
          </li>
          <li>How to make text look professionally designed.</li>
        </ul>
      </div>
    </div>
  );
}

export default Course;
