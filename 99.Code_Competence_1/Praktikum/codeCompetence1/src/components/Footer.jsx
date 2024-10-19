import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222] text-white pb-6 pt-10">
      <div className="container font-poppins mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-4">Arjun's Project</h4>
          <p className="text-gray-400 text-sm mr-12">
            Projek untuk code competence 1 pada Alterra Academy
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
          <div className="flex w-28 gap-2">
            <a href="https://www.instagram.com/arjunnafi17/">
              <img src="../src/assets/instagram.svg" alt="" />
            </a>
            <a href="">
              <img src="../src/assets/twitterx.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/arjun-nafi-mahardika-621b8a157/?originalSubdomain=id">
              <img src="../src/assets/linkedin.svg" alt="" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Me</h4>
          <p className="text-gray-400 text-sm">
            Krasak, RT 04/04, Pecangaan, Jepara
          </p>
          <br />
          <p className="text-gray-400 text-sm">Email: arjunnafi04@gmail.com</p>
          <p className="text-gray-400 text-sm">Phone: 089 654 863 434</p>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-6">
        &copy; 2024 Arjun's Project. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
