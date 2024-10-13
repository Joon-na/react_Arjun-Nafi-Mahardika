import React from "react";

export default function Header() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          {/* Menggunakan Tailwind Grid untuk Navbar */}
          <div className="grid grid-cols-2 items-center">
            <div>
              <div className="font-[Roboto] text-[24px] not-italic font-medium leading-[normal] tracking-[-0.32px]">
                Simple header
              </div>
            </div>
            <nav className="flex justify-end items-center gap-[8px]">
              <a
                href="#"
                className="text-[#0D6EFD] px-[16px] py-[12px] rounded-[4px] hover:bg-[#0D6EFD] hover:text-white"
              >
                Home
              </a>
              <a
                href="#"
                className="text-[#0D6EFD] px-[16px] py-[12px] rounded-[4px] hover:bg-[#0D6EFD] hover:text-white"
              >
                Features
              </a>
              <a
                href="#"
                className="text-[#0D6EFD] px-[16px] py-[12px] rounded-[4px] hover:bg-[#0D6EFD] hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-[#0D6EFD] px-[16px] py-[12px] rounded-[4px] hover:bg-[#0D6EFD] hover:text-white"
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-[#0D6EFD] px-[16px] py-[12px] rounded-[4px] hover:bg-[#0D6EFD] hover:text-white"
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
