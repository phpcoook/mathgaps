import React, { useState } from "react";
import {
  heroIcon1,
  heroIcon2,
  heroIcon3,
  heroIcon4,
  heroIconCenter1,
  arrow,
  heroShape,
  herobg,
} from "../../assets/";

const Hero = () => {
  
  return (
    <section
      className="bg-no-repeat items-center bg-cover bg-center object-cover object-center relative"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="pt-10 container mx-auto items-center flex flex-wrap relative">
        <div className="w-full lg:w-10/12 mx-auto">
          <div className="lg:w-10/12 mx-auto pt-10 flex items-center mb-6">
            <div
              className="wow bounceIn"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <img src={heroIcon1} className="w-[30rem]" alt="heroIcon1" />
            </div>
            <div
              className="wow bounceIn"
              data-wow-duration="1.5s"
              data-wow-delay="600ms"
            >
              <img src={heroIcon2} className="w-[30rem]" alt="heroIcon2" />
            </div>
            <div
              className="hero-shape-center wow bounceIn"
              data-wow-duration="1.5s"
              data-wow-delay="1000ms"
            >
              <img
                src={heroIconCenter1}
                className="w-[50rem]"
                alt="heroIconCenter"
              />
            </div>
            <div
              className="wow bounceIn"
              data-wow-duration="1.5s"
              data-wow-delay="1400ms"
            >
              <img src={heroIcon4} className="w-[30rem]" alt="heroIcon4" />
            </div>
            <div
              className="wow bounceIn"
              data-wow-duration="1.5s"
              data-wow-delay="1800ms"
            >
              <img src={heroIcon3} className="w-[30rem]" alt="heroIcon3" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 mx-auto">
          <div className="text-center -mt-16 sm:-mt-24 md:-mt-32 pb-20  md:pb-28">
            <h1
              className="hero-title text-5xl sm:text-2xxl lg:text-4xl xl:text-5xl text-blue_200 leading-none font-libreFranklin font-extrabold tracking-tight mb-5 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="300ms"
            >
              Find and fill every gap <br/> in your maths knowledge.
            </h1>
            <p
              className="text-blue_200 opacity-60 text-llg tracking-wide leading-normal font-medium  mb-6 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="600ms"
            >
              An essential tool for high school students.
            </p>
            <div
              className="mb-1 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="1000ms"
            >
              <a className="getstarted-btn rounded-3xl  inline-block font-md text-white py-3 px-7 font-bold leading-normal filter drop-shadow-lg">
                Get started for FREE!
                <img className="ml-3 inline-block w-5" src={arrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end container */}
      <div className="absolute w-full bottom-0">
        <img className="w-full" src={heroShape} alt="" />
      </div>
      {/* shape */}
    </section>
  );
};

export default Hero;
