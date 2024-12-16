import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <div className="bg-[#161513] min-h-screen flex items-center justify-center py-10 text-white">
        <div className="flex flex-col md:flex-row w-full max-w-5xl">
          {/* Left Section */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-4xl font-bold mb-4">Contact us</h1>
            <p className="mb-4 font-poppins text-sm text-[#C5C5C5]">
              Need to get in touch with us? Either fill out the form with your
              inquiry or find the department email you'd like to contact below.
            </p>
          </div>

          {/* Right Section (Form) */}
          <div className="md:w-1/2 p-8 bg-[#222] rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First name*
                </label>
                <input
                  className="w-full p-2 rounded bg-zinc-700 text-white focus:outline-none"
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  className="w-full p-2 rounded bg-zinc-700 text-white focus:outline-none"
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  className="w-full p-2 rounded bg-zinc-700 text-white focus:outline-none"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  What can we help you with?
                </label>
                <textarea
                  className="w-full p-2 rounded bg-zinc-700 text-white focus:outline-none"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {submittedData && (
          <div className="ml-3 p-4 bg-[#161513] rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Submitted Data:</h2>
            <p>
              <strong>First Name:</strong> {submittedData.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {submittedData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
