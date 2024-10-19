// src/pages/CourseDetailPage.js
import React, { useState } from 'react';
import { useCourses } from '../context/CourseContext';
import { useParams } from 'react-router-dom';

const CourseDetailPage = () => {
    const { id } = useParams();
    const { courseList, enrollInCourse } = useCourses();
    const [isEnrolled, setIsEnrolled] = useState(false); // For showing success message

    const course = courseList.find(course => course.id === parseInt(id));

    if (!course) {
        return <div className="text-center text-red-500 mt-8">Course not found!</div>;
    }

    const handleEnroll = () => {
        enrollInCourse(course); // Enroll the user in the course
        setIsEnrolled(true); // Show success message
    };

    return (
        <div className="p-5 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-lg "><br></br>
            <h1 className="text-4xl font-bold text-center mb-4">{course.title}</h1><br></br>
         

            <div className="mt-4 text-lg">
                <p className="mt-2"><strong>Instructor:</strong> {course.instructor}</p>
                <p className="mt-2"><strong>Duration:</strong> {course.duration} hours</p>
                <p className="mt-2"><strong>Level:</strong> {course.level}</p>
                <p className="mt-2"><strong>Category:</strong> {course.category}</p>
                <p className="mt-2"><strong>Prerequisites:</strong> {course.prerequisites}</p>
                <p className="mt-2"><strong>Description:</strong> {course.description}</p>
            </div>

            <div className="mt-6">
                <h3 className="font-semibold text-lg">Learning Outcomes:</h3>
                <ul className="list-disc list-inside mt-2">
                    {course.learningOutcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                <h3 className="font-semibold text-lg">Benefits:</h3>
                <p className="mt-2">{course.benefits}</p>
            </div>

            <div className="mt-6">
                <h3 className="font-semibold text-lg">Course Content:</h3>
                <ul className="list-disc list-inside mt-2">
                    {course.content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Enroll Button */}
            <button 
                className={`mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isEnrolled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleEnroll}
                disabled={isEnrolled} // Disable button if already enrolled
            >
                {isEnrolled ? 'Enrolled' : 'Enroll Now'}
            </button>

            {/* Success Message */}
            {isEnrolled && (
                <p className="mt-4 text-green-600 font-semibold text-center">You have successfully enrolled in the course!</p>
            )}
        </div>
    );
};

export default CourseDetailPage;
