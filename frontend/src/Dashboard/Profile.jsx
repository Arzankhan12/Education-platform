import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-info">
            <img
              src="https://picsum.photos/150"
              alt="User Avatar"
              className="profile-avatar-large"
            />
            <div>
              <h3>Karan</h3>
              <p>karansarovi@gmail.com</p>
            </div>
            <button className="edit-btn" onClick={toggleEdit}>
              {isEditing ? 'Close' : 'Edit'}
            </button>
          </div>

          {/* Form Section */}
          {isEditing && (
            <div className="profile-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your First Name" />
              </div>
              <div className="form-group">
                <label>Nick Name</label>
                <input type="text" placeholder="Your First Name" />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <input type="text" placeholder="Your First Name" />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" placeholder="Your First Name" />
              </div>
              <div className="form-group">
                <label>Language</label>
                <input type="text" placeholder="Your First Name" />
              </div>
              <div className="form-group">
                <label>Time Zone</label>
                <input type="text" placeholder="Your First Name" />
              </div>
            </div>
          )}
        </div>

        {/* Email Section */}
        <div className="email-section">
          <h4>My Email Address</h4>
          <div className="email-item">
            <div>
              <p>alexarawles@gmail.com</p>
              <p className="email-timestamp">1 month ago</p>
            </div>
          </div>
          <button className="add-email-btn">+ Add Email Address</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
