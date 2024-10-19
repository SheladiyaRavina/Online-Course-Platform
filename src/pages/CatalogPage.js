import React, { useState } from 'react';
import { CourseCard } from '../components/CourseCard';
import { useCourses } from '../context/CourseContext';

const CatalogPage = () => {
  const { courseList } = useCourses();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredCourses = courseList.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || course.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex flex-col">
<section
  className="relative bg-cover bg-center text-white text-center p-16 mb-12"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-vector/education-technology-futuristic-background-vector-gradient-blue-digital-remix_53876-114092.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-70"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-4xl font-bold mb-6">Explore Our Course Catalog</h1>
    
    {/* Search Bar */}
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-500 p-2 me-5 rounded-lg w-full md:w-2/3 lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
      >
        <option value="All">All Categories</option>
        <option value="Web Development">Web Development</option>
        <option value="Data Science">Data Science</option>
        <option value="Mobile Development">Mobile Development</option>
        <option value="Database">Database</option>
        <option value="Security">Security</option>
        <option value="Marketing">Marketing</option>
        <option value="Cloud Computing">Cloud Computing</option>
        <option value="Version Control">Version Control</option>
      </select>
    </div>


  </div>
</section>

<div className="container mx-auto p-6">
  {/* Courses Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredCourses.length > 0 ? (
      filteredCourses.map((course) => (
        <div 
          key={course.id} 
          className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
        >
 
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{course.description}</p>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{course.category}</p>
            <div className="mt-4">
              <a 
                href={`/courses/${course.id}`} 
                className="text-red-500 font-semibold hover:text-blue-700"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center col-span-3 text-lg font-semibold text-gray-600">
        No courses found.
      </p>
    )}
  </div><br></br><br></br>
</div>


    </div>
  );
};

export default CatalogPage;
