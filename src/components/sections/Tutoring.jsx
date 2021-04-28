import React from 'react';
import { clock, measure, book, tutor1, tutor2, tutor3, mans } from '../../assets/';

const Tutoring = () => {
    return (
        <section className="pt-20 md:pt-32 pb-20">
        <div className="container mx-auto">
          <div className="md:flex flex-wrap w-11/12 px-10 mx-auto">
            <div className="w-full mx-auto md:w-10/12 lg:w-6/12 fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="300ms">
              <h2 className="text-2xl sm:text-2xxl md:text-5xl text-gray_100 leading-tight font-libreFranklin font-extrabold tracking-tighter">
                The perfect tool for tutoring.
              </h2>
              <div className="duration-300 border-b border-dashed border-gray_100 border-opacity-60">
                <div className="rounded-xl flex items-center py-5 px-6 my-5">
                  <img className="w-12" src={clock} alt="" />
                  <div className="ml-5">
                    <h4 className="text-2lg text-gray_100  leading-tight font-bold mb-1">
                      Spend more tute time teaching
                    </h4>
                    <p className="text-md text-gray_100 font-medium leading-tight opacity-60">
                      Tutors spend lots of time trying to find gaps. When MathGaps is used for
                      diagnostics,
                      tutors have more time to focus on teaching content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="duration-300 border-b border-dashed border-gray_100 border-opacity-60">
                <div className="rounded-xl flex items-center py-5 px-6 my-5">
                  <img className="w-12" src={book} alt="" />
                  <div className="ml-5">
                    <h4 className="text-2lg text-gray_100  leading-tight font-bold mb-1">
                      Prevent multiple explanations
                    </h4>
                    <p className="text-md text-gray_100 font-medium leading-tight opacity-60">
                      Knowledge gaps struggle learning advanced content. This reduces progression as
                      tutors
                      are required to explain concepts multiple times.
                    </p>
                  </div>
                </div>
              </div>
              <div className="duration-300 border-b border-dashed border-gray_100 border-opacity-60">
                <div className="rounded-xl flex items-center py-5 px-6 my-5">
                  <img className="w-12" src={mans} alt="" />
                  <div className="ml-5">
                    <h4 className="text-2lg text-gray_100  leading-tight font-bold mb-1">
                      Prioritise topics of need
                    </h4>
                    <p className="text-md text-gray_100 font-medium leading-tight opacity-60">
                      Tutors can access information on a student’s strengths and weaknesses so that they
                      can
                      focus their attention on the areas of need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="duration-300">
                <div className="rounded-xl flex items-center py-5 px-6 my-5">
                  <img className="w-12" src={measure} alt="" />
                  <div className="ml-5">
                    <h4 className="text-2lg text-gray_100  leading-tight font-bold mb-1">
                      Easily measure progress
                    </h4>
                    <p className="text-md text-gray_100 font-medium leading-tight opacity-60">
                      The live knowledge report allows students, parents and tutors to easily observe
                      improvements in a students ability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10 md:mb-0 w-full mx-auto md:w-10/12 lg:w-6/12">
              <div className="pl-5 flex flex-wrap mt-10 md:mt-24 fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="300ms">
                <div className="w-6/12 relative top-20">
                  <img className="px-1" src={tutor1} alt="" />
                </div>
                <div className="w-6/12">
                  <img className="px-1" src={tutor2} alt="" />
                </div>
                <div className="w-full mt-8">
                  <img src={tutor3} alt="" />
                </div>
              </div>
            </div>
            <div className="pt-8 text-center mx-auto">
              <a href="#" className="flex items-center relative tutor-btn py-3 px-4 rounded-lg bg-pink_100 text-[20px] text-white leading-tight font-extrabold font-libreFranklin">
                <span className="hidden md:block w-20 border-shape" />
                <span className="inline-block mx-2">
                  <svg className="inline-block mr-2" width={31} height={30} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={0} y={0} width={31} height={30}>
                      <rect x="0.5" width={30} height={30} fill="url(#pattern0)" />
                    </mask>
                    <g mask="url(#mask0)">
                      <rect x="0.5" width={30} height={30} fill="white" />
                    </g>
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                        <use xlinkHref="#image0" transform="scale(0.0166667)" />
                      </pattern>
                      <image id="image0" width={60} height={60} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAB+UlEQVRoge2Zu07DMBRATxGiEo8vKBXfgpgY2JgQK2Ip/SrYOiIxdIcywcRWKvGQKhCvFsFGGZKiNLjFiW8TN9wjWYpi174n141tBRRFUZRiUAbqQAt4D0sLOAjrCkUFuAQGY8pF2KYQlJksG5U2Zfqv30mXW2DTRbieYLCaB8ID4MZF+DzBQGeeCA/GyZQshPvAskU7CF5kK7F7YwefMka3eeFBvmwHngJWD3bOos1VgkGTtM0FG+HDBP0dpQ3EJ8oES47NsrSQU4wY4nGiwmRpHzYeosIQZK9GsPT0w3Ia3sszs0PEhSUpAftAF3gAtgX69FZ4DWgyGtyjQL/eCQ+z2uN3cF2B/r0SNmV1WHrAlsAYosJVoIE5Oy6lSfAwJBATrgJPhg5dSo9gektuO8WEG4bOfMlqFDFhqWl8j3xWo4gJJxU7Jp9dV27Cqy6DOWAlbDO9kj6trM6/ceJxGuOwOR4WChUuOipcdLIQltylTSpxOhi+QGSxLDltAhy5IzgL/KBTukB0gL34zbRfHob/jROLtnntvFITfzl8ROo+DfVek2ZKv4y5nglU2AIVniVU2IKo5LNUIFmhGbYgmtV/IfzvMqzCs0Qa4bfI9atUID5xzejBYTFSt8ToAaKdeXRTYINAugvsGOp3w7o2sJ5hXIqiKErh+AY2IKW4uiOzsQAAAABJRU5ErkJggg==" />
                    </defs>
                  </svg>
                  If you don’t have a tutor, our TutorMatch system can help you find one!
                </span>
                <span className="hidden md:block w-20 border-shape" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
};

export default Tutoring;