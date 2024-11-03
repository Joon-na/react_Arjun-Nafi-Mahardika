import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <div className="grid grid-cols-2 items-center">
            <div className="font-roboto text-[24px] font-medium">
              Simple header
            </div>
            <nav className="flex justify-end items-center gap-2">
              <Link
                to="/"
                className="text-[#0D6EFD] px-4 py-3 rounded hover:bg-[#0D6EFD] hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/create-product"
                className="text-[#0D6EFD] px-4 py-3 rounded hover:bg-[#0D6EFD] hover:text-white"
              >
                Product
              </Link>
              <a
                href="#"
                className="text-[#0D6EFD] px-4 py-3 rounded hover:bg-[#0D6EFD] hover:text-white"
              >
                About Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center bg-[#37517E] h-auto md:h-[760px]">
        <div className="mt-10 md:mt-[153px] ml-6 md:ml-[82px] mb-8 md:mb-[80px] text-center md:text-left">
          <h2 className="text-white font-jost text-3xl md:text-[48px] font-bold leading-tight">
            Better Solutions For Your Business
          </h2>
          <p className="text-white text-opacity-60 font-jost text-lg md:text-2xl md:mb-[45px]">
            We are a team of talented designers making websites with Bootstrap
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="createProduct.html">
              <button className="bg-[#47B2E4] hover:bg-white hover:text-black transition-all duration-700 text-white py-2 px-6 rounded-full">
                Get Started
              </button>
            </a>
            <a href="#">
              <button className="border border-white text-white py-2 px-6 rounded-full hover:bg-black transition-all duration-700">
                Watch Video
              </button>
            </a>
          </div>
        </div>
        <div className="w-full md:w-[636px] h-auto">
          <img
            src="../src/assets/hero-img.png"
            alt="hero-image"
            className="w-full"
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#f3f5fa] text-center py-[50px] px-[20px]">
        <h2 className="text-[#37517e] text-[24px] font-semibold mb-[16px]">
          Join Our Newsletter
        </h2>
        <p className="text-gray-700 text-[15px] font-normal mb-[30px]">
          Tamen quem nulla quae legam multos aute sint culpa legam nostera magna
        </p>
        <div className="w-full inline-block justify-center items-center">
          <form>
            <input
              type="email"
              required=""
              className="w-[45%] h-[42.5px] py-[6px] px-[15px] rounded-full shadow-md mb-[15px] relative left-[5%]"
            />
            <button
              type="submit"
              className="w-full max-w-[150px] h-[42.5px] bg-[#47b2e4] text-white rounded-full shadow-md relative right-[5%]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-white py-12 px-6 flex flex-wrap justify-between text-gray-700">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-[#37517e] font-bold text-xl mb-4">ARSHA</h3>
          <p className="text-sm">
            A108 Adam Street
            <br />
            New York, NY 535022
            <br />
            United States
          </p>
          <p className="mt-2">
            <strong>Phone:</strong> +1 5589 55488 55
          </p>
          <p>
            <strong>Email:</strong> info@example.com
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-[#37517e] font-bold text-xl mb-4">
            Useful Links
          </h3>
          <a href="#" className="block text-sm">
            Home
          </a>
          <a href="#" className="block text-sm">
            About us
          </a>
          <a href="#" className="block text-sm">
            Services
          </a>
          <a href="#" className="block text-sm">
            Terms of service
          </a>
          <a href="#" className="block text-sm">
            Privacy policy
          </a>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-[#37517e] font-bold text-xl mb-4">
            Our Services
          </h3>
          <a href="#" className="block text-sm">
            Web Design
          </a>
          <a href="#" className="block text-sm">
            Web Development
          </a>
          <a href="#" className="block text-sm">
            Product Management
          </a>
          <a href="#" className="block text-sm">
            Marketing
          </a>
          <a href="#" className="block text-sm">
            Graphic Design
          </a>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-[#37517e] font-bold text-xl mb-4">
            Our Social Networks
          </h3>
          <p className="text-sm mb-4">
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="flex gap-2">
            <a href="#" className="w-9 h-9 bg-[#47b2e4] rounded-full"></a>
            <a href="#" className="w-9 h-9 bg-[#47b2e4] rounded-full"></a>
            <a href="#" className="w-9 h-9 bg-[#47b2e4] rounded-full"></a>
            <a href="#" className="w-9 h-9 bg-[#47b2e4] rounded-full"></a>
            <a href="#" className="w-9 h-9 bg-[#47b2e4] rounded-full"></a>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-[#3b5998] text-white py-4 px-14 text-[13px] flex justify-between">
        <p>
          &copy; Copyright <strong>Arsha</strong>. All Rights Reserved
        </p>
        <p>
          Designed by{" "}
          <a href="#" className="text-[#47B2E4]">
            BootstrapMade
          </a>
        </p>
      </div>
    </>
  );
};

export default LandingPage;
