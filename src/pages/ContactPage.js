import React, { useState } from 'react';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to handle form submission status
  const [error, setError] = useState(null); // State to handle error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setError(null); // Reset error state

    // Simulate an API call
    try {
      console.log('Sending message:', formData);
      // Here you would normally send the data to your API
      // await sendMessageToAPI(formData); // Replace with actual API call
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    } catch (error) {
      console.error('Error sending message:', error);
      setError('There was a problem sending your message. Please try again later.');
    }
  };

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
          <h1 className="text-4xl font-bold">Contact Us</h1>
          
        </div>
      </section>
   
    <div className="container mx-auto p-4">


      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2><br></br>
          <p className="mb-4">
            We would love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out using the form below or contact us through the provided details.
          </p>
          <p className="mb-4">
            Our dedicated support team is here to help you with any inquiries you may have regarding our courses, platform features, or technical support. Don’t hesitate to get in touch!
          </p>
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p>Email: <a href="#" className="text-red-600">support@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-red-600">(123) 456-7890</a></p>
          <p className="mt-4">Follow us on social media:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-500">Facebook</a>
            <a href="#" className="text-gray-500">Twitter</a>
            <a href="#" className="text-gray-500">Instagram</a>
            <a href="#" className="text-gray-500">LinkedIn</a>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-6">

          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Contact Form</h2>
          
          {isSubmitted && (
            <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {error && (
            <div className="bg-red-100 text-red-800 p-4 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-2 rounded mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-2 rounded mb-4"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="border p-2 rounded mb-4"
            />
            <button
              type="submit"
              className="bg-gray-900  text-white p-2 rounded hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div><br></br>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Why Contact Us?</h3>
        <p className="mb-4">
          We value your feedback and inquiries. Your thoughts help us improve our services and ensure that we meet your learning needs effectively. Whether you’re interested in our courses, need technical support, or just want to say hello, we are here for you!
        </p><br></br>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
