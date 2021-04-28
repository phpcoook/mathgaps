import React from 'react';
import { footerLogo } from '../../assets/';

const Footer = () => {
    return (
        <footer className="footer bg-offwhite100 pt-8 pb-20">
        <div className="container mx-auto">
          <div className="sm:flex text-center sm:text-left justify-between items-center border-b border-solid border-gray_100 border-opacity-10 pb-4">
            <div className="text-center">
              <a href="#">
                <img className="mx-auto mb-4 sm:mb-0 sm:ml-auto" src={footerLogo} alt="" />
              </a>
            </div>
            <ul className="footer-menu">
              <li className="inline-block mx-2">
                <a href="#" className="footer-text text-sm leading-normal font-normal inline-block">FAQs</a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="footer-text text-sm leading-normal font-normal inline-block">Pricing</a>
              </li>
              <li className="inline-block ml-2">
                <a href="#" className="footer-text text-sm leading-normal font-normal inline-block">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="pt-4 sm:flex text-center sm:text-left justify-between items-center">
            <p className="footer-text mb-4 sm:mb-0 text-sm leading-normal font-normal inline-block">
              Use 6 or more characters
            </p>
            <ul className="footer-menu">
              <li className="inline-block mx-2">
                <a href="#" className="text-sm footer-text leading-normal font-normal inline-block">Privacy
                  Policy</a>
              </li>
              <li className="inline-block ml-2 list">
                <a href="#" className="text-sm footer-text leading-normal font-normal inline-block">Terms of
                  Service</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
};

export default Footer;