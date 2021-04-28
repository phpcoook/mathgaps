import React, {useEffect, useState} from "react";
import {
  identifyImg,
  checkImg,
  roket,
  mockup,
  mockup2,
  mockup3,
} from "../../assets";
import $ from 'jquery'

const HowItWorks = () => {
  useEffect(() => {
    $("ul.tabs li").on('click', function () {
      var tab_id = $(this).attr("data-tab");
      
      $("ul.tabs li h4").removeClass("text-white");
      $("ul.tabs li p").removeClass("text-white");

      $("ul.tabs li h4").addClass("text-gray_100");
      $("ul.tabs li p").addClass("text-gray_100");

      $("ul.tabs li").removeClass("current");
      $(".tab-content").removeClass("current");

      $(this).addClass("current");
      $("#" + tab_id).addClass("current");

      $(this).find('h4').removeClass('text-gray_100');
      $(this).find('h4').addClass('text-white');

      $(this).find('p').removeClass('text-gray_100');
      $(this).find('p').addClass('text-white');
    });

    $("ul.tabs li div").on("click", function () {

      $("ul.tabs li div").removeClass("tutor-info");

      $(this).addClass("tutor-info");
    });


  }, []);


  return (
    <section className="py-24 bg-offwhite overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xxl sm:text-4xl md:text-5xl leading-tight text-gray_100 font-libreFranklin font-extrabold">
            <span className="relative inline-block text-blue_100">
              How
              <svg
                className="absolute -left-6 -top-6"
                width={41}
                height={28}
                viewBox="0 0 41 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.8922 1.80867C34.2812 1.63407 34.3469 1.26409 34.5594 1.01195C34.683 0.865077 34.9425 0.651641 35.0029 0.760352C35.4308 1.53131 36.6795 1.43075 36.8108 2.48555C37.3451 6.76612 39.131 10.7261 39.9967 14.9217C40.0579 15.2168 40.1381 15.5074 40.202 15.8018C40.5734 17.5016 40.5728 17.5017 38.9065 17.4778C37.192 17.4534 37.064 17.3842 36.421 15.6902C35.085 12.1709 33.7682 8.64362 32.634 5.05283C32.28 3.93307 32.0382 2.78189 32.4959 1.62367C32.6181 1.31349 32.776 1.0041 32.9797 0.743361C33.1587 0.514713 33.4277 0.249203 33.746 0.404131C34.0765 0.565286 33.8325 0.861857 33.7796 1.10088C33.7314 1.31963 33.6661 1.53886 33.8922 1.80867Z"
                  fill="#323232"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.1831 7.69582C18.4038 8.52451 19.1408 9.74498 19.8234 11.0089C21.3051 13.7539 22.3374 16.7173 23.9045 19.4219C24.2075 19.9447 24.0648 20.177 23.4201 20.3205C21.5466 20.7371 20.6742 19.5343 19.9169 18.2211C18.397 15.5848 16.9517 12.9059 15.462 10.2528C15.0759 9.56509 14.6455 8.9022 14.2215 8.23642C13.9768 7.85132 14.102 7.51739 14.3274 7.19447C14.5609 6.8604 14.8338 6.90153 15.2107 7.01167C15.881 7.20725 16.5777 7.30921 17.1831 7.69582Z"
                  fill="#323232"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.01813 25.2517C3.68929 24.4685 2.35723 23.6915 1.03443 22.8989C0.613479 22.6464 0.16862 22.3799 0.359223 21.7547C0.533629 21.1839 1.00893 21.4102 1.39062 21.3467C2.12695 21.2239 2.81611 21.3729 3.48559 21.6401C6.39874 22.8008 9.1748 24.1991 11.5436 26.3054C11.7995 26.5336 12.1109 26.7076 12.0488 27.109C11.9791 27.5626 11.5616 27.4512 11.2761 27.5863C9.94431 28.2177 8.89716 27.601 7.82738 26.9248C6.90631 26.343 5.95274 25.8122 5.01392 25.2588L5.01813 25.2517Z"
                  fill="#323232"
                />
              </svg>
            </span>
            <span>&nbsp;does MathGaps work?</span>
          </h2>
        </div>
        <div className="lg:grid grid-cols-12 mx-auto items-center">
          <div className="md:col-span-4 lg:flex flex-wrap xl:px-8">
            <ul className="tabs grid grid-cols-3 md:border-b border-dashed lg:flex lg:flex-col">
              <li
                className="tab-link current border-r md:border-r-0 items-center flex border-dashed border-gray_100 border-opacity-30"
                data-tab="tab-1"
              >
                <div className="tutor-info hover:bg-blue_100 md:px-4 py-2 rounded-xl flex items-center">
                  <img className="md:w-12 w-8" src={identifyImg} alt="" />
                  <div className="lg:ml-5 ml-2">
                    <h4 className="text-sm lg:text-2lg text-white leading-tight font-bold ">
                      Find your gaps
                    </h4>
                    <p className="text-[10px] lg:text-md text-white font-medium leading-tight opacity-60">
                      Quickly identify all of your missing skills
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="tab-link border-r md:border-r-0 border-dashed border-gray_100 border-opacity-30 wow slideInLeft"
                data-tab="tab-2"
              >
                <div className="hover:bg-blue_100 px-4 py-2 rounded-xl flex items-center">
                  <img className="md:w-12 w-8" src={checkImg} alt="" />
                  <div className="lg:ml-5 ml-2">
                    <h4 className="text-sm lg:text-2lg text-gray_100  leading-tight font-bold ">
                      Fill your gaps
                    </h4>
                    <p className="text-[10px] lg:text-md text-gray_100 font-medium leading-tight opacity-60">
                      Learning programs personalised for you
                    </p>
                  </div>
                </div>
              </li>
              <li className="tab-link wow slideInLeft" data-tab="tab-3">
                <div className="hover:bg-blue_100 lg:px-4 py-2 rounded-xl flex items-center justify-center">
                  <img className="md:w-12 w-8" src={roket} alt="" />
                  <div className="lg:ml-5 ml-2">
                    <h4 className="text-sm lg:text-2lg  text-gray_100 leading-tight font-bold ">
                      Track your progress
                    </h4>
                    <p className="text-[10px] lg:text-md md:pr-6 xl:pr-16 text-gray_100 font-medium leading-tight opacity-60">
                      Easily view data on your capability
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:col-span-8 sm:flex flex-wrap">
            {/* Tab One */}
            <div id="tab-1" className="tab-content current">
              <div className="sm:w-7/12 mb-10 sm:mb-0">
                <div className="px-6">
                  <h3 className="sec-title text-gray_100 font-libreFranklin leading-snug text-2xl font-extrabold">
                    Quickly and accurately assess every key skill
                  </h3>
                  <ul className="mt-6">
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Sit an initial fundamentals assessment
                    </li>
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Pick topic tests relevant to coursework
                    </li>
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Powered by a diagnostic testing algorithim
                    </li>
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Gamified to promote engagement
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sm:w-5/12 flex items-center">
                <div className="px-4">
                  <div className="relative">
                    <img src={mockup} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/*/ End Tab One */}
            {/* Tab Two */}
            <div id="tab-2" className="tab-content">
              <div className="sm:w-7/12 mb-10 sm:mb-0">
                <div className="px-6">
                  <h3 className="sec-title sectitle-two text-gray_100 font-libreFranklin leading-snug text-2xl font-extrabold">
                    Fill your gaps in the smartest way possible
                  </h3>
                  <ul className="mt-6">
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Data-driven learning programs
                    </li>
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Personalised to your exact needs
                    </li>
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Learn in the most optimal order
                    </li>
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Fill the gaps needed for coursework
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sm:w-5/12 flex items-center">
                <div className="px-4">
                  <div className="relative">
                    <img src={mockup2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Tab Two */}
            {/* Tab Two */}
            <div id="tab-3" className="tab-content">
              <div className="sm:w-7/12 mb-10 sm:mb-0">
                <div className="px-6">
                  <h3 className="sec-title sectitle-three text-gray_100 font-libreFranklin leading-snug text-2xl font-extrabold">
                    Watch as your maths skills rocket
                  </h3>
                  <ul className="mt-6">
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Access a complete report on capability
                    </li>
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Continually updating with each gap filled
                    </li>
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Graphs visualise strengths and weaknesses
                    </li>
                    <li className="flex items-center text-lgg text-gray_100 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4583 0.666656C5.48772 0.666656 0.625 5.52938 0.625 11.5C0.625 17.4706 5.48772 22.3333 11.4583 22.3333C17.4289 22.3333 22.2917 17.4706 22.2917 11.5C22.2917 5.52938 17.4289 0.666656 11.4583 0.666656ZM11.4583 2.83332C16.2582 2.83332 20.125 6.7001 20.125 11.5C20.125 16.2999 16.2582 20.1667 11.4583 20.1667C6.65845 20.1667 2.79167 16.2999 2.79167 11.5C2.79167 6.7001 6.65845 2.83332 11.4583 2.83332ZM11.4583 4.99999C7.86817 4.99999 4.95833 7.90982 4.95833 11.5C4.95833 15.0902 7.86817 18 11.4583 18C15.0485 18 17.9583 15.0902 17.9583 11.5C17.9583 10.5044 17.7276 9.56467 17.3278 8.72183L11.617 14.4326C11.4134 14.6363 11.1382 14.75 10.8511 14.75C10.564 14.75 10.2877 14.6363 10.0851 14.4326L7.42757 11.7751C7.00399 11.3515 7.00399 10.6667 7.42757 10.2432C7.85116 9.81957 8.53589 9.81957 8.95947 10.2432L10.8511 12.1348L16.0688 6.9191C14.8913 5.73393 13.261 4.99999 11.4583 4.99999Z"
                            fill="#30C18B"
                          />
                        </svg>
                      </span>
                      Show off to parents, teachers and tutors
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sm:w-5/12 flex items-center">
                <div className="px-4">
                  <div className="relative">
                    <img
                      className="fadeIn wow"
                      data-wow-duration="1.5s"
                      data-wow-delay="500ms"
                      src={mockup3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Tab Three */}
          </div>
          {/* tab content */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
