import React from 'react';
import { Link } from 'react-router-dom';

export const CourseCard = ({ course }) => {
  return (
<>

    <div className="border rounded-lg p-4 bg-gray-100 shadow-lg hover:shadow-xl transition ">
      <p className="text-xl font-semibold mt-2 mb-1">{course.title}</p>
      
      <p className="text-base">{course.description.length > 100 ? course.description.slice(0, 100) + '...' : course.description}</p>
      <p className="text-base mt-1">{course.category}</p>
      <p className="text-base mt-1">{course.level}</p>
      <Link
        to={`/courses/${course.id}`}
        className="text-red-500 mt-2 inline-block"
      >
        View Details
      </Link>
      
    </div>
</>
  );
};
