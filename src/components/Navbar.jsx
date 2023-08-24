import navLogo from "../assets/images/header-logo.svg";

import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" padding-x py-8 max-container absolute  z-10 w-full">
      <nav className="flex items-center justify-between">
        <a href="/">
          <img src={navLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex items-center justify-end gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-montserrat text-slate-gray text-lg"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu */}
        <div className="max-lg:block hidden cursor-pointer relative">
          <span
            className={`bg-slate-gray  h-0.5 w-6 block transition-all duration-300 ease-out rounded-sm  ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-slate-gray  h-0.5 w-6 block transition-all duration-300 ease-out rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-slate-gray  h-0.5 w-6 block transition-all duration-300 ease-out rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
