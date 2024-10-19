import React from 'react';
import { CourseCard } from '../components/CourseCard';
import { useCourses } from '../context/CourseContext';

const HomePage = () => {
  const { courseList } = useCourses();

  return (
   <>
   {/* Hero Section */}
   <section
  className="relative bg-cover bg-center text-white text-center p-12 mb-8"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-vector/education-technology-futuristic-background-vector-gradient-blue-digital-remix_53876-114092.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Dark Overlay */}
  <div className="relative z-10">
    <h1 className="text-4xl font-bold">Welcome to Our Course Platform</h1>
    <p className="mt-4 text-lg">Enhance your skills with our curated courses!</p>
    <p className="mt-4 max-w-2xl mx-auto">
      Our platform offers a diverse range of courses tailored to meet the needs of learners at every stage of their journey. Whether you're looking to advance your career, change paths, or simply learn something new, we have the resources you need to succeed.
    </p>
  </div>
</section>


    <div className="container mx-auto ">
  
      <section className="mb-8">
        <h2 className="text-4xl font-bold text-center text-gray-900">Featured Courses</h2>  <br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {courseList.slice(0, 9).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
      <br></br>

<section className="bg-sky-100 p-8 mb-8 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-center">About Us</h2>
  <p className="mt-4 text-gray-700">
    Welcome to our online learning platform! We are committed to delivering high-quality education and training to learners around the world. 
    Whether you're looking to enhance your professional skills, dive into a new field, or pursue personal growth, we have a course that fits your needs.
  </p>
  <p className="mt-4 text-gray-700">
    Our courses are carefully curated by industry experts, ensuring that you gain relevant and up-to-date knowledge in areas such as technology, business, arts, and more. We focus on interactive and engaging learning experiences to help you succeed in both personal and professional endeavors.
  </p>
  <p className="mt-4 text-gray-700">
    Join a community of motivated learners, collaborate on projects, and connect with instructors who are passionate about sharing their expertise. With flexible learning options and a supportive environment, you can achieve your goals at your own pace.
  </p>
  <ul className="mt-4 list-disc list-inside text-gray-700">
    <li>Access to over 500+ courses in various fields</li>
    <li>Expert instructors from leading industries</li>
    <li>Flexible learning schedule</li>
    <li>Certificate of completion for every course</li>
    <li>Lifetime access to all enrolled courses</li>
  </ul>
  <p className="mt-4 text-gray-700">
    Start your learning journey today and unlock your potential with us. We're here to help you every step of the way.
  </p>
</section>

{/* Testimonials Section */}
<section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold text-center">What Our Students Say</h2>
  <div className="mt-4">
    <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-4">
      "This platform transformed my career! The courses are insightful and practical." - Sarah K.
    </blockquote>
    <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-4">
      "I loved the flexibility of learning at my own pace. Highly recommend!" - John D.
    </blockquote>
    <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-4">
      "Excellent courses and knowledgeable instructors. I learned so much!" - Emily R.
    </blockquote>
    <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-4">
      "The hands-on projects helped me apply what I learned. Truly invaluable!" - Mark T.
    </blockquote>
    <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-4">
      "I appreciate the supportive community and the access to resources." - Jessica M.
    </blockquote>
    <blockquote className="italic border-l-4 border-blue-500 pl-4">
      "The courses are well-structured, and the content is up-to-date with industry standards." - Alex W.
    </blockquote>
  </div>
</section>


     
    </div>
    <section
  className="relative bg-cover bg-center text-white text-center py-16 px-8" // Increased padding
  style={{
    backgroundImage: "url('https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg')", // Replace with your actual image URL
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-60"></div> {/* Darkened the overlay to 60% opacity */}

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
    <p className="text-lg mb-4">
      Unlock a world of knowledge with our diverse and expertly curated courses.
      Whether you're looking to learn new skills, advance in your career, or
      explore a passion, we've got the perfect course for you!
    </p>
    <p className="text-lg mb-6">
      Join thousands of learners across the globe and gain access to courses in web development, data science, marketing, security, and much more.
    </p>
    <button className="mt-6 bg-white text-gray-500 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out">
      Sign Up Today
    </button>
  </div>
</section>

   </>
  );
};

export default HomePage;
