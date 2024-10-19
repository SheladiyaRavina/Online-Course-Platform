import React from 'react';


const AboutPage = () => {
  return (
<>
        <section
        className="relative bg-cover bg-center text-white text-center p-8 mb-8"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/education-technology-futuristic-background-vector-gradient-blue-digital-remix_53876-114092.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Dark Overlay */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Welcome to About Us</h1>
          
        </div>
      </section>
    <div className="container mx-auto p-4">
 

      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2 md:pr-6">
          <img src='https://png.pngtree.com/thumb_back/fh260/background/20210908/pngtree-employees-in-the-office-study-and-discuss-work-image_829244.jpg' alt="About Us" className="rounded-lg shadow-md mb-4" />
        </div>
        <div className="md:w-1/2">
  <h2 className="text-3xl font-semibold">Our Mission</h2>
  <p className="mt-2">
    Welcome to our course platform! Our goal is to provide comprehensive and high-quality educational resources that help individuals enhance their skills, knowledge, and confidence.
  </p>
  <p className="mt-2">
    Our mission is to empower learners from all walks of life by making education accessible, affordable, and engaging. Whether you're looking to advance in your career, explore new passions, or gain practical knowledge, we have something for everyone.
  </p>
  <p className="mt-2">
    We believe in the transformative power of education. By creating a supportive and innovative learning environment, we aim to foster curiosity, critical thinking, and creativity, helping you reach your personal and professional goals.
  </p>
  <p className="mt-2">
    Our dedicated instructors and carefully curated content are here to guide you on your journey to success. Join a global community of learners and unlock your full potential through our diverse range of courses, tailored to suit various learning styles and needs.
  </p>
  <p className="mt-2">
    Together, we are shaping the future of learning—one course, one skill, and one achievement at a time.
  </p>
</div>

      </div>

      {/* Vision Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">Our Vision</h2><br></br>
        <p className="mt-2">
          We envision a world where everyone has the opportunity to learn and develop their skills, irrespective of their location or background.
        </p>
        <p className="mt-2">
          Through innovative learning experiences and expert guidance, we strive to make education more engaging and effective.
        </p>
        <p className="mt-2">
          Our goal is to bridge the gap between knowledge and practice, ensuring that our learners are well-equipped for the challenges of the modern workforce.
        </p>
      </div>

      {/* Values Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">Our Values</h2><br></br>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Inclusivity:</strong> We believe in providing equal access to education for all.</li><br></br>
          <li><strong>Quality:</strong> Our courses are designed and delivered by industry experts with a focus on practical knowledge.</li><br></br>
          <li><strong>Innovation:</strong> We continually update our content and teaching methods to stay ahead in the ever-evolving educational landscape.</li><br></br>
          <li><strong>Community:</strong> We foster a collaborative environment where learners can share ideas and support each other.</li><br></br>
        </ul>
      </div>

      {/* Approach to Learning Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">Our Approach to Learning</h2><br></br>
        <p className="mt-2">
          We adopt a hands-on approach to learning, emphasizing practical applications and real-world scenarios. Our courses include projects, quizzes, and interactive discussions to enhance your learning experience.
        </p>
        <p className="mt-2">
          Our platform offers flexibility, allowing you to learn at your own pace and revisit materials as needed. We understand that everyone’s learning journey is unique, and we strive to accommodate different learning styles and preferences.
        </p>
      </div>

      {/* Testimonials Section */}
      <div>
        <h2 className="text-3xl font-semibold">What Our Learners Say</h2><br></br>
        <blockquote className="mt-2 italic border-l-4 border-gray-700 pl-4">
          "This platform has transformed the way I learn! The courses are engaging, and I feel more confident in my skills." - Jane D.
        </blockquote>
        <blockquote className="mt-2 italic border-l-4 border-gray-700 pl-4">
          "The best decision I made for my career was enrolling here. The quality of education is exceptional!" - John S.
        </blockquote><br></br>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
