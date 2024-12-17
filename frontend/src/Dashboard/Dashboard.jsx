import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import { FaUser, FaVideo, FaBook, FaBars } from 'react-icons/fa';
import Header from './Header';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <nav className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
          {isSidebarOpen && <h2 className="sidebar-title">Code With Smile Dashboard</h2>}
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars className="menu-icon" />
          </button>
        </div>

        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/dashboard/dash" className="menu-link">
              <FaBook className="menu-icon" />
              {isSidebarOpen && <span className="menu-text">Dashboard</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/profile" className="menu-link">
              <FaVideo className="menu-icon" />
              {isSidebarOpen && <span className="menu-text">Profile</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/upload-video" className="menu-link">
              <FaUser className="menu-icon" />
              {isSidebarOpen && <span className="menu-text">Upload Video</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/upload-course" className="menu-link">
              <FaBook className="menu-icon" />
              {isSidebarOpen && <span className="menu-text">Upload Course</span>}
            </Link>
          </li>
        </ul>

        <div className="menu-section-title">
          {isSidebarOpen && <span>Account Pages</span>}
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/dashboard/profile" className="menu-link">
              <FaUser className="menu-icon" />
              {isSidebarOpen && <span className="menu-text">Profile</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/sign-in" className="menu-link">
              <FaUser className="menu-icon" />
              {isSidebarOpen && <span className="menu-text">Sign In</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/sign-up" className="menu-link">
              <FaUser className="menu-icon" />
              {isSidebarOpen && <span className="menu-text">Sign Up</span>}
            </Link>
          </li>
        </ul>

        <div className="sidebar-footer">
          {isSidebarOpen && (
            <>
              <span>Need Help?</span>
              <br />
              <a href="https://example.com">Contact Us</a>
            </>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
