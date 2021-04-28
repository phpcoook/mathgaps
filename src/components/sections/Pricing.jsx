import React from "react";
import { arrow, catBG } from "../../assets/";

const Pricing = () => {
  return (
    <div>
      <section
        className="pt-20 pb-20 md:pb-32 items-center bg-cover  bg-center object-cover object-center"
        style={{ backgroundImage: `url(${catBG})` }}
      >
        <div className="container mx-auto">
          <div
            className="text-center w-9/12 mx-auto wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="300ms"
          >
            <h2 className="block text-2xl sm:text-2xxl md:text-4xl text-white tracking-tighter leading-snug font-libreFranklin font-extrabold mb-2">
              Start for free. Upgrade later.
            </h2>
            <p className="text-md text-white leading-normal font-medium opacity-60">
              Start your MathGaps journey for free. Take the fundamentals test
              and figure out where your gaps lie. If you are loving MathGaps,
              upgrade to Premium Access to access your full results and heaps
              more features.
            </p>
          </div>
        </div>
      </section>
      {/*/ End cat section */}
      {/* pricing section */}
      <section className="pt-16 md:pt-0 pb-8 md:-mt-10">
        <div className="container mx-auto">
          <div className="md:flex flex-wrap justify-center">
            <div className="md:w-4/12 md:mt-24 mb-10 md:mb-0">
              <div
                className="mx-4 px-4 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="300ms"
              >
                <span className="block text-4xl text-gray_100 tracking-tighter leading-snug font-libreFranklin font-extrabold mb-2">
                  Free
                </span>
                <div className>
                  <a
                    href="#"
                    className="block text-center relative getstarted-btn rounded-3xl block font-md text-white py-3 px-7 font-bold leading-normal filter drop-shadow-lg mb-6"
                  >
                    Get started
                    <img
                      className="ml-3 inline-block w-5 absolute top-4 right-6"
                      src={arrow}
                      alt=""
                    />
                  </a>
                  <ul>
                    <li className="flex items-center text-md text-gray_100 font-medium leading-tight tracking-tightest mb-3">
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
                      Fundamental gaps assessment
                    </li>
                    <li className="flex items-center text-md text-gray_100 font-medium leading-tight tracking-tightest mb-3">
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
                      2 topics of results
                    </li>
                    <li className="flex items-center text-md text-gray_300 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          className="opacity-50"
                          width={15}
                          height={14}
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4375 3.85562L10.6444 3.0625L7.5 6.20688L4.35562 3.0625L3.5625 3.85562L6.70688 7L3.5625 10.1444L4.35562 10.9375L7.5 7.79313L10.6444 10.9375L11.4375 10.1444L8.29313 7L11.4375 3.85562Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <del>Gaps assessment for each topic</del>
                    </li>
                    <li className="flex items-center text-md text-gray_300 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          className="opacity-50"
                          width={15}
                          height={14}
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4375 3.85562L10.6444 3.0625L7.5 6.20688L4.35562 3.0625L3.5625 3.85562L6.70688 7L3.5625 10.1444L4.35562 10.9375L7.5 7.79313L10.6444 10.9375L11.4375 10.1444L8.29313 7L11.4375 3.85562Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <del>Personalised learning pro gram</del>
                    </li>
                    <li className="flex items-center text-md text-gray_300 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          className="opacity-50"
                          width={15}
                          height={14}
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4375 3.85562L10.6444 3.0625L7.5 6.20688L4.35562 3.0625L3.5625 3.85562L6.70688 7L3.5625 10.1444L4.35562 10.9375L7.5 7.79313L10.6444 10.9375L11.4375 10.1444L8.29313 7L11.4375 3.85562Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <del>Analytics on capability</del>
                    </li>
                    <li className="flex items-center text-md text-gray_300 font-medium leading-tight tracking-tightest mb-3">
                      <span className="inline-block mr-3">
                        <svg
                          className="opacity-50"
                          width={15}
                          height={14}
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4375 3.85562L10.6444 3.0625L7.5 6.20688L4.35562 3.0625L3.5625 3.85562L6.70688 7L3.5625 10.1444L4.35562 10.9375L7.5 7.79313L10.6444 10.9375L11.4375 10.1444L8.29313 7L11.4375 3.85562Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <del>Complete TutorMatch access</del>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-4/12 mb-10 md:mb-0">
              <div
                className="mx-4 pricing-card  wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="300ms"
              >
                <h3 className="text-2lg text-blue_300  leading-tight font-extrabold flex items-center mb-5">
                  <span className="inline-block mr-3">
                    <svg
                      width={53}
                      height={25}
                      viewBox="0 0 53 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M44.9224 12.4787C44.9224 9.60475 43.175 7.60548 40.6267 7.60548C38.0965 7.60548 36.3309 9.6226 36.3309 12.4787C36.3309 15.3705 38.1147 17.3698 40.6267 17.3698C43.175 17.3698 44.9224 15.3705 44.9224 12.4787Z"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M13.2028 7.74829C14.5497 7.74829 15.5509 8.64082 15.5509 9.90821C15.5509 11.1756 14.5679 12.1217 13.3666 12.1217H10.4542V7.74829H13.2028Z"
                        fill="url(#paint1_linear)"
                      />
                      <path
                        d="M26.111 7.74829C27.458 7.74829 28.4591 8.64082 28.4591 9.90821C28.4591 11.1756 27.4762 12.1217 26.2748 12.1217H23.3078V7.74829H26.111Z"
                        fill="url(#paint2_linear)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.54184 0C4.89265 0 2.74506 2.15035 2.74506 4.80293V20.1723C2.74506 22.8249 -1.82284 24.9753 0.826346 24.9753H41.1193C43.7685 24.9753 50 25.6325 52.6316 20.1723V4.80293C52.6316 2.15035 50.484 0 47.8348 0H7.54184ZM40.6267 20.1723C36.4037 20.1723 33.4186 16.9949 33.4186 12.4787C33.4186 7.98034 36.4037 4.80293 40.6267 4.80293C44.8678 4.80293 47.8348 7.98034 47.8348 12.4787C47.8348 16.9949 44.8678 20.1723 40.6267 20.1723ZM13.3666 14.9778C16.3882 14.9778 18.4814 12.9428 18.4814 9.90821C18.4814 6.7665 16.3154 4.89219 13.2028 4.89219H7.54184V20.0652H10.4542V14.9778H13.3666ZM23.3078 20.0652V14.9778H25.4557L28.6593 20.0652H32.136L28.5501 14.5315C30.2975 13.7639 31.3897 12.1038 31.3897 9.90821C31.3897 6.7665 29.2236 4.89219 26.111 4.89219H20.3955V20.0652H23.3078Z"
                        fill="url(#paint3_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="52.6316"
                          y1="4.77376e-06"
                          x2="-1.68708"
                          y2="4.46196"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FC985F" />
                          <stop offset={1} stopColor="#AE5FFC" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="52.6316"
                          y1="4.77376e-06"
                          x2="-1.68708"
                          y2="4.46196"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FC985F" />
                          <stop offset={1} stopColor="#AE5FFC" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear"
                          x1="52.6316"
                          y1="4.77376e-06"
                          x2="-1.68708"
                          y2="4.46196"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FC985F" />
                          <stop offset={1} stopColor="#AE5FFC" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear"
                          x1="52.6316"
                          y1="4.77376e-06"
                          x2="-1.68708"
                          y2="4.46196"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FC985F" />
                          <stop offset={1} stopColor="#AE5FFC" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  Premium Access
                </h3>
                <span className="pl-4 pr-14 inline-block relative text-4xl text-gray_100 tracking-tighter leading-snug font-libreFranklin font-extrabold mb-4">
                  <sup className="text-md text-gray_300 absolute top-3 left-0 font-medium">
                    $
                  </sup>
                  10
                  <sub className="text-md text-gray_300 tracking-wider absolute bottom-5 -right-4 font-medium">
                    / month
                  </sub>
                </span>
                <div className>
                  <a
                    href="#"
                    className="text-center relative getstarted-btn rounded-3xl block font-md text-white py-3 px-7 font-bold leading-normal filter drop-shadow-lg mb-7"
                  >
                    Get started
                    <img
                      className="ml-3 inline-block w-5 absolute top-4 right-6"
                      src={arrow}
                      alt=""
                    />
                  </a>
                  <ul>
                    <li className="flex items-center text-md text-gray_100 font-medium leading-tight tracking-tightest mb-3">
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
                      Fundamental gaps assessment
                    </li>
                    <li className="flex items-center text-md text-gray_100 font-medium leading-tight tracking-tightest mb-3">
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
                      Comprehensive knowledge report
                    </li>
                    <li className="flex items-center text-md text-gray_100 font-medium leading-tight tracking-tightest mb-3">
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
                      Gaps assessment for each topic
                    </li>
                    <li className="flex items-center text-md text-gray_100 font-medium leading-tight tracking-tightest mb-3">
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
                      Personalised learning roadmap
                    </li>
                    <li className="flex items-center text-md text-gray_100 font-medium leading-tight tracking-tightest mb-3">
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
                      Analytics on capability
                    </li>
                    <li className="flex items-center text-md text-gray_100 font-medium leading-tight tracking-tightest mb-3">
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
                      Complete TutorMatch access
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
