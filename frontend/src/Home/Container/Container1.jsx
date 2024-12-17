import React from 'react';
import './Container.css';

const Container1 = () => {
  const courses = [
    {
      title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
      author: "Julian Melanson, Benza Maman, Leap...",
      rating: 4.5,
      reviews: 41110,
      price: "₹2,699",
      bestseller: true,
    },
    {
      title: "The Complete AI-Powered Copywriting Course & ChatGPT...",
      author: "Ing. Tomas Moravek, Learn Digital...",
      rating: 4.5,
      reviews: 1687,
      price: "₹3,099",
      bestseller: false,
    },
    {
      title: "ChatGPT & Midjourney & Gemini: Digital Marketing Assistants",
      author: "Anton Voroniuk, Anton Voroniuk Support...",
      rating: 4.4,
      reviews: 429,
      price: "₹799",
      bestseller: false,
    },
    {
      title: "ChatGPT for Data Science and Machine Learning",
      author: "Raj Chhabria",
      rating: 4.5,
      reviews: 263,
      price: "₹799",
      bestseller: false,
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <nav>
          <ul className="nav-tabs">
            <li>Data Science</li>
            <li>IT Certifications</li>
            <li>Leadership</li>
            <li>Web Development</li>
            <li>Communication</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="categories">
          <button>ChatGPT</button>
          <button>Data Science</button>
          <button>Python</button>
          <button>Machine Learning</button>
        </div>
        <div className="course-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-image"></div>
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>{course.author}</p>
                <div className="rating">
                  <span>⭐ {course.rating}</span> ({course.reviews})
                </div>
                <p className="price">{course.price}</p>
                {course.bestseller && <span className="bestseller">Bestseller</span>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Container1;
