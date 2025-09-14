import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-300 py-8">
     <div className="border-t border-[#0d0d1f] mt-8 pt-4 text-sm text-[#0d0d1f] text-center">
          © {new Date().getFullYear()} <span className="text-[#3b3ffb]">NotesApp</span>. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;