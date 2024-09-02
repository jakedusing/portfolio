import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#44344b] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 via-opacity-60 to-pink-500">
          J.D.
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
