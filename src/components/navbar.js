import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#f4faff] p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-#024180 font-bold ml-2 text-xl ">
          <span className="text-[#f15825]">Chit</span>Fund
        </span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-10">
        <a href="#" className="text-[#024180] hover:text-[#f15825]">
          Home
        </a>
        <a href="#" className="text-[#024180] hover:text-[#f15825]">
          Become a member
        </a>
        <a href="#" className="text-[#024180] hover:text-[#f15825]">
          About Us
        </a>
      </div>

      {/* Connect Wallet Button (MetaMask) */}
      <button className="bg-[#f15825] font-medium text-[#024180] hover:bg-gray-200 px-4 py-2 rounded-md">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
