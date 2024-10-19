import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#161513] w-full">
      <div className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16">
        <img
          className="w-[200px] h-[180px] sm:w-[251px] sm:h-[223px] mt-8 sm:mt-16 mb-6 sm:mb-8"
          src="../src/assets/avatar.png"
          alt="avatar"
        />
        <h1 className="font-poppins text-[40px] sm:text-[55px] font-extrabold leading-tight text-white text-center">
          Keep Learn
        </h1>
        <h1 className="font-poppins text-[40px] sm:text-[55px] font-extrabold leading-tight bg-gradient-to-r from-[#FF8660] via-white-500 to-[#9A33FF] inline-block text-transparent bg-clip-text mb-6 sm:mb-8 text-center">
          Always Moving
        </h1>
        <p className="w-full sm:w-[600px] text-center font-poppins font-light text-[#C5C5C5] mb-6 sm:mb-8 px-4">
          Hello! I am a Junior Web Developer who is enthusiastic about learning
          and developing digital solutions. With a strong foundation in HTML,
          CSS, JavaScript, and some experience with modern frameworks like
          React, I am committed to continuing to learn and adapt to new
          technologies.
        </p>
        <div className="flex gap-3 sm:gap-5 text-sm font-semibold mb-12 sm:mb-16">
          <button className="bg-white w-[120px] sm:w-[140px] h-[35px] rounded-[40px] font-poppins hover:bg-violet-500 hover:text-white active:bg-violet-700 transition-colors duration-200">
            Get in Touch
          </button>
          <button className="border-[white] text-white border-[1px] border-[solid] w-[120px] sm:w-[140px] h-[35px] rounded-[40px] font-poppins hover:bg-pink-500 hover:text-white active:bg-pink-700 transition-colors duration-200">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
