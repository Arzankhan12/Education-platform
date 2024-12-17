import React from 'react'

function Header() {
  return (
    <header className="profile-header">
    <div>
      <h2>Welcome, Karan</h2>
      <p className="date">Tue, 03 Dec 2022</p>
    </div>
    <div className="header-actions">
      <input type="text" className="search-bar" placeholder="Search" />
              <div className="profile-avatar">
                 
      </div>
    </div>
  </header>
  )
}

export default Header
