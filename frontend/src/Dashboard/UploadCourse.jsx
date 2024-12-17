import React from 'react';
import './Upload.css';

function UploadCourse() {
  return (
    <div className="upload">
      <h2>Upload Your Course</h2>
      <form className="upload-form">
        <div className="form-group">
          <label htmlFor="course-title" className="form-label">Course Title:</label>
          <input
            type="text"
            id="course-title"
            className="form-input"
            placeholder="Enter course title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="course-description" className="form-label">Course Description:</label>
          <textarea
            id="course-description"
            className="form-textarea"
            placeholder="Enter a brief description"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="course-files" className="form-label">Upload Course Files:</label>
          <input
            type="file"
            id="course-files"
            className="upload-input"
            accept=".zip,.pdf,.docx"
            multiple
          />
        </div>
        <button type="submit" className="upload-btn">Upload</button>
      </form>
    </div>
  );
}

export default UploadCourse;
