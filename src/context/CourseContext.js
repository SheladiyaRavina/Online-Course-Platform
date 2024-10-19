import React, { createContext, useContext, useState } from 'react';
import courses from '../data/courses';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courseList] = useState(courses);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollInCourse = (courseId) => {
    const course = courseList.find((c) => c.id === courseId);
    if (course && !enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  return (
    <CourseContext.Provider value={{ courseList, enrolledCourses, enrollInCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);
