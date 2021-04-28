import React, { useState, useEffect } from "react";
import { logo, arrow, mobileMenu, closeIcon } from "../../assets/";
import $ from 'jquery'

const Header = () => {

  const [position, setPosition] = useState(false)

  
  const changeBackground = () => {
    if(window.scrollY >= 20) {
      setPosition(true)
    } else {
      setPosition(false)
    }
  }
  
  window.addEventListener('scroll', changeBackground)

  return (
    <header
      className={`flex ${position ? 'fixed header-sticky' : 'absolute'} justify-center items-center h-24 w-full bg-transparent z-50 top-0 py-2 md:py-2 xl:py-1`}
      id="header"
    >
      <div className="container mx-auto px-8">
        <nav className="hidden lg:flex flex-wrap items-center justify-between navbar-expand-lg left-0 top">
          <div className="py-2 w-full mx-auto flex flex-wrap items-center justify-between">
            <div className="w-4/12 flex justify-between static">
              <a
                className="font-display font-bold text-white text-lg1 relative z-50 inline-block whitespace-no-wrap"
                href="#"
              >
                <img className="w-48" src={logo} alt="" />
              </a>
            </div>
            <div className="w-4/12 items-center flex">
              <ul className="flex flex-col md:flex-row list-none mx-auto space-x-10 items-center">
                <li>
                  <a
                    href="#"
                    className="capitalize inline-block text-md text-white leading-tight font-medium	 transition-all duration-300"
                  >
                    The Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="capitalize inline-block text-md text-white leading-tight font-medium	 transition-all duration-300"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="capitalize inline-block text-md text-white leading-tight font-medium	 transition-all duration-300"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-4/12 ml-auto text-right">
              <a
                href="#"
                className="header-btn rounded-full inline-block font-md text-base xl:text-md text-white py-3 px-4 xl:px-6 font-bold border-solid border-2 border-white leading-tight filter drop-shadow-lg mr-2"
              >
                Log in
              </a>
              <a
                href="#"
                className="getstarted-btn rounded-full inline-block text-base xl:text-md font-md text-white py-3 px-4 xl:px-6 font-bold leading-normal filter drop-shadow-lg"
              >
                Get started
                <img
                  className="ml-2 xl:ml-3 inline-block w-5"
                  src={arrow}
                  alt=""
                />
              </a>
            </div>
          </div>
        </nav>
        {/* flex-wraper */}
        <nav
          className="flex lg:hidden flex-wrap items-center justify-between px-2 navbar-expand-lg left-0 top "
          style={{ padding: 0 }}
        >
          <div className="mx-auto  w-full flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="font-display font-bold text-white text-lg1 relative z-50 inline-block whitespace-no-wrap"
                href="#"
              >
                <img className="w-48" src={logo} alt="" />
              </a>
              <div className="flex items-center">
                <a className="inline-block" type="button" id="mobile-menu">
                  <span
                    className="menu-open inline-block py-2 rounded-sm"
                    style={{ width: "40px", textAlign: "center" }}
                  >
                    <img
                      src={mobileMenu}
                      style={{ filter: "brightness(300)" }}
                      alt=""
                    />
                  </span>
                  <span className="menu-close inline-block hidden py-2 rounded-sm">
                    <img
                      src={closeIcon}
                      style={{ filter: "brightness(300)" }}
                      alt=""
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="mobile-toogle flex-grow items-center hidden bg-prm">
              <ul className=" list-none mx-auto px-8 py-10 items-center">
                <li>
                  <a
                    href="#"
                    className="py-1 capitalize inline-block text-md text-white leading-tight font-medium	 transition-all duration-300"
                  >
                    The Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1 capitalize inline-block text-md text-white leading-tight font-medium	 transition-all duration-300"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1 capitalize inline-block text-md text-white leading-tight font-medium	 transition-all duration-300"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* flex-wraper */}
      </div>
      {/* container */}
    </header>
  );
};

export default Header;
