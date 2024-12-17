import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Top companies choose <span className="highlight">Code With Smile Business</span> to build in-demand career skills.</p>
        <div className="footer-logos">
         
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <a href="#">Code With Smile Business</a>
          <a href="#">Teach on Udemy</a>
          <a href="#">Get the app</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
        <div className="footer-column">
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Help and Support</a>
          <a href="#">Affiliate</a>
          <a href="#">Investors</a>
        </div>
        <div className="footer-column">
          <a href="#">Terms</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookie settings</a>
          <a href="#">Sitemap</a>
          <a href="#">Accessibility statement</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2024 Code With Smile, Inc.</span>
        {/* <button className="language-selector ">English</button> */}
      </div>
    </footer>
  );
};

export default Footer;
