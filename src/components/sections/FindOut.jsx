import React from 'react';
import { sign1, sign2, sign3, sign4, sign5, arrow, arrowShape1, arrowShape2, sign6, baseBG} from '../../assets/';

const FindOut = () => {
    return (
      <section className="pt-16 md:pt-20 pb-16 md:pb-28">
        <div className="container mx-auto">
          <div
            className="sm:py-6 lg:py-0 sm:flex flex-wrap items-center rounded-3xl	 bg-cover  bg-center object-cover object-center text-center mx-auto"
            style={{ backgroundImage: `url(${baseBG})` }}
          >
            <div className="sm:w-3/12 lg:w-4/12">
              <div className="px-4">
                <div className="relative">
                  <div className="sm:-mt-16 lg:-mt-9 ml-12">
                    <img className="w-20 sm:w-24 lg:w-44" src={sign1} alt="" />
                  </div>
                  <div className="text-center -mt-5">
                    <img
                      className="ml-auto w-24 sm:w-20 lg:w-44"
                      src={sign4}
                      alt=""
                    />
                  </div>
                  <div className="text-left absolute -bottom-32 sm:-bottom-20">
                    <img className="w-20 sm:w-24 lg:w-36" src={sign5} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-6/12 lg:w-4/12">
              <div className="px-4 text-center">
                <h2 className="block text-2xl sm:text-2xxl md:text-4xl text-gray_100 tracking-tighter leading-none font-libreFranklin font-extrabold mb-4">
                  Where do your gaps lie?
                </h2>
                <div className="relative">
                  <span className="inline-block">
                    <img className="w-20 lg:w-24" src={arrowShape1} alt="" />
                  </span>
                  <a
                    href="#"
                    className="getstarted-btn rounded-3xl inline-block font-md text-white py-3 px-7 font-bold leading-normal filter drop-shadow-lg"
                  >
                    Find out now
                    <img
                      className=" ml-3 inline-block w-5"
                      src={arrow}
                      alt=""
                    />
                  </a>
                  <span className="inline-block">
                    <img className="w-20 lg:w-24" src={arrowShape2} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="sm:w-3/12 lg:w-4/12">
              <div className="px-4">
                <div className="relative">
                  <div className="sm:-mt-9 ml-12">
                    <img className="w-20 sm:w-24 lg:w-44" src={sign2} alt="" />
                  </div>
                  <div className="text-center">
                    <img
                      className="ml-auto w-20 sm:w-24 lg:w-44"
                      src={sign6}
                      alt=""
                    />
                  </div>
                  <div className="text-left sm:absolute sm:-bottom-20">
                    <img
                      className="mx-auto w-20 sm:w-24 lg:w-36"
                      src={sign3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FindOut;