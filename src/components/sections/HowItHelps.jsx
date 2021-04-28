import React from 'react';
import { arrowDown, arrowDown2, icon01, arrow15, improveIcon, artwork, loghtIcon, homeIcon, arrow5, longArrowIcon, dashedLine1, arrow} from '../../assets/';

const HowItHelps = () => {
    return (
      <section className="bg-yellow_200 pt-12 pb-24">
        <div className="container mx-auto">
          <div
            className="flex items-center xl:w-8/12 text-center mx-auto mt-2 mb-5 fadeInUp wow "
            data-wow-duration="1.5s"
            data-wow-delay="300ms"
          >
            <span className="inline-block">
              <img
                className="w-10 md:w-[164px]"
                src={arrowDown}
                alt="arrowDown"
              />
            </span>
            <h2 className="text-2xl sm:text-2xxl md:text-5xl leading-tight text-gray_100 font-libreFranklin font-extrabold">
              How MathGaps will help you.
            </h2>
            <span className="inline-block">
              <img className="w-10 md:w-44" src={arrowDown2} alt="arrowDown2" />
            </span>
          </div>
          <div className="md:flex flex-wrap">
            <div className="md:w-4/12 mx-auto mt-4">
              <div
                className="mx-auto w-10/12 md:w-full lg:w-10/12 rounded-xl flex items-center py-3 px-4 bg-white mb-6 md:mb-0 fadeInLeftBig wow"
                data-wow-duration="1.5s"
                data-wow-delay="300ms"
              >
                <img className="w-12" src={icon01} alt="" />
                <div className="ml-5">
                  <h4 className="text-xl text-black leading-tight font-bold font-libreFranklin">
                    See a big boost <br/> in confidence
                  </h4>
                </div>
              </div>
              <div className="hidden md:block">
                <img className="mx-auto my-5 w-4" src={arrow15} alt="" />
              </div>
              <div
                className="mx-auto w-10/12 md:w-full lg:w-10/12 md:ml-6 lg:ml-16 rounded-xl flex items-center py-3 px-3 bg-white mb-6 md:mb-0 fadeInLeftBig wow"
                data-wow-duration="1.5s"
                data-wow-delay="300ms"
              >
                <img className="w-12" src={improveIcon} alt="" />
                <div className="ml-5">
                  <h4 className="text-xl text-black leading-tight font-bold font-libreFranklin">
                    Improve your <br/> maths grades
                  </h4>
                </div>
              </div>
            </div>
            <div className="md:w-4/12">
              <div className="text-center mt-16 md:mt-0">
                <img
                  className="wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="300ms"
                  src={artwork}
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-4/12 mt-4">
              <div
                className="mx-auto lg:ml-6 w-10/12 md:w-full lg:w-11/12 rounded-xl flex items-center py-3 px-3 bg-white mb-8 fadeInRightBig wow"
                data-wow-duration="1.5s"
                data-wow-delay="300ms"
              >
                <img className="w-12" src={loghtIcon} alt="" />
                <div className="ml-5">
                  <h4 className="text-xl text-black leading-tight font-bold font-libreFranklin">
                    Prevent confusion <br/> during class
                  </h4>
                </div>
              </div>
              <div className="hidden md:block">
                <img className="mx-auto my-5 w-4" src={arrow5} alt="" />
              </div>
              <div
                className="mx-auto md:-ml-6 lg:-ml-0  w-10/12 md:w-full lg:w-10/12 rounded-xl flex items-center py-3 px-3 bg-white mb-8 fadeInRightBig wow"
                data-wow-duration="1.5s"
                data-wow-delay="300ms"
              >
                <img className="w-12" src={homeIcon} alt="" />
                <div className="ml-5">
                  <h4 className="text-xl text-black leading-tight font-bold font-libreFranklin">
                    Fill any gaps from <br/> remote learning
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-28">
              <img className="z-0" src={dashedLine1} alt="" />
            </div>
            <div className="mx-auto relative px-8 py-6 z-50 md:flex flex-wrap bg-[#323232] bg-opacity-[0.05] rounded-md md:py-2 w-8/12 items-center justify-center">
              <p className="text-2lg text-center mb-mb-0 text-gray_100  leading-tight font-bold font-libreFranklin">
                Access these amazing benefits!
              </p>
              <span className="hidden md:block lg:inline-block px-8">
                <img src={longArrowIcon} className="w-[95px] h-[20px]" alt="" />
              </span>
              <a
                href="#"
                className="getstarted-btn rounded-3xl inline-block font-md text-white py-3 px-7 font-bold leading-normal filter drop-shadow-lg"
              >
                Get started for FREE!
                <img className="ml-3 inline-block w-5" src={arrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HowItHelps;