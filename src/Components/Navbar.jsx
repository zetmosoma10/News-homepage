import { useState } from "react";
import { navLinks } from "../Constants";

const Navbar = () => {
  const [toogleSidebar, setToogleSidebar] = useState(false);

  const showSidebar = () => {
    setToogleSidebar(true);
  };

  const removeSidebar = () => {
    setToogleSidebar(false);
  };

  return (
    <header>
      <nav className="flex justify-between items-center pt-3">
        <div>
          <img src="/images/images/logo.svg" alt="logo" />
        </div>
        <ul className=" hidden  md:flex">
          {navLinks.map((link) => (
            <li className="md:ml-10" key={link.name}>
              <a className=" hover:text-soft_red " href={link.to}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="block md:hidden cursor-pointer" onClick={showSidebar}>
          <img src="/images/icon-menu.svg" alt="menu icon" />
        </div>
      </nav>
      <div
        className={`${toogleSidebar ? "" : "hidden"} fixed top-0 left-0 w-screen h-screen  md:hidden`}
      >
        <div
          className={`absolute top-0 right-0 p-4  h-screen bg-off_white w-4/6 z-10`}
        >
          <div
            className="flex justify-end items-center cursor-pointer"
            onClick={removeSidebar}
          >
            <img src="/images/icon-menu-close.svg" alt="close menu icon" />
          </div>
          <ul className="mt-20">
            {navLinks.map((link) => (
              <li className="mb-6" key={link.name}>
                <a
                  className="text-very_dark_blue hover:text-soft_red focus:underline outline-none"
                  href={link.to}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
