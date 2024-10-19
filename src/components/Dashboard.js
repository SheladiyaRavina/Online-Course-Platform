// src/pages/Dashboard.js
import React from 'react';
import { useCourses } from '../context/CourseContext';

const Dashboard = () => {
    const { enrolledCourses } = useCourses();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Your Enrolled Courses</h1>
            {enrolledCourses.length > 0 ? (
                <ul className="mt-4">
                    {enrolledCourses.map(course => (
                        <li key={course.id} className="border p-2 rounded mb-2">
                            <h2 className="font-semibold">{course.title}</h2>
                            <p>{course.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No enrolled courses yet.</p>
            )}
        </div>
    );
};

export default Dashboard;
