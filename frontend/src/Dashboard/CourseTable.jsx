import React from 'react';
import './CourseTable.css';

function CourseTable() {
  const courses = [
    { id: 1, title: 'React Basics', duration: '3 hours', instructor: 'John Doe' },
    { id: 2, title: 'Advanced React', duration: '5 hours', instructor: 'Jane Smith' },
    { id: 3, title: 'JavaScript Essentials', duration: '4 hours', instructor: 'Alice Johnson' },
  ];

  return (
    <div className="course-table">
      <h2>Courses</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Duration</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.duration}</td>
              <td>{course.instructor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseTable;
