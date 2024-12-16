import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <section className="bg-[#161513] w-full flex flex-col items-center">
        <img
          className="rounded-[50%] w-[20%] mt-10"
          src="../src/assets/profile.jpg"
          alt="profile"
        />
        <h1 className="font-poppins text-white text-4xl font-bold mt-12 mb-8">
          About Us
        </h1>
        <p className="w-[50%] text-justify font-poppins font-light text-[#C5C5C5] mb-8">
          Hi, my name is Arjun Nafi' Mahardika. I am currently studying at
          Semarang State University with a bachelor's degree in informatics
          engineering. I entered this study program because I wanted to learn
          more about technology. Currently I am focusing on web development,
          especially the front-end area. I have studied various technologies
          such as HTML, CSS, JavaScript, and Libraries such as React.js, which
          helped me understand how a website can run responsively and
          dynamically. My interest in web development continues to grow as I
          learn and explore the latest trends in the world of technology. I am
          confident that my skills in web development will be a strong
          foundation for my future career, and I am very enthusiastic to
          continue improving my skills in this field.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default About;
