import React from 'react';
import { featuresEmojiSVG, featuresEmoji1SVG, featuresEmoji2SVG, featuresEmoji3SVG, featuresEmoji4SVG, featuresEmoji5SVG} from '../../assets/';

const Features = () => {
    return (
        <div className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-9/12 px-6">
            {/* Item one */}
            <div className="mb-8 sm:mb-0 px-10 sm:px-0 w-full sm:w-6/12 md:w-4/12 text-center px-6 md:border-r border-dashed border-ray_100 border-opacity-60 bounceUp" data-wow-duration="2s" data-wow-delay="300ms">
              <div>
                <div className="relative mb-10">
                    <span className=" absolute top-0 left-0 right-0 mx-auto opacity-20 bg-pink_100 h-8 w-8 rounded-full block" />
                    <h4 className="receive text-2lg text-gray_100 font-bold leading-tight font-libreFranklin">Who?</h4>
                </div>
                <div className="mb-8 px-6">
                    <img className="mx-auto mb-5" src={featuresEmojiSVG} alt="" />
                    <p className="lg:px-6 text-md text-gray_100 font-medium leading-tight">
                    Australian maths
                    students in years 8-11
                    </p>
                </div>
                <div className="mb-8 md:mb-0 px-6">
                    <img className="mx-auto mb-5" src={featuresEmoji1SVG} alt="" />
                    <p className="lg:px-2 text-md text-gray_100 font-medium leading-tight">
                    Students looking to improve overall capability
                    </p>
                </div>
              </div>
            </div>
            {/* Item one End*/}
            <div className="mb-8 sm:mb-0 px-10 sm:px-0 w-full sm:w-6/12 md:w-4/12 text-center px-6 md:border-r border-dashed	border-ray_100 border-opacity-60 bounceUp" data-wow-duration="2s" data-wow-delay="600ms">
              <div>
                <div className="relative mb-10">
                    <span className="absolute top-0 left-0 right-0 mx-auto opacity-20 bg-yellow_100 h-8 w-8 rounded-full block" />
                    <h4 className="receive text-2lg text-gray_100 font-bold leading-tight font-libreFranklin">Why?</h4>
                </div>
                <div className="mb-8 px-6">
                    <img className="mx-auto mb-5" src={featuresEmoji2SVG} alt="" />
                    <p className="lg:px-6 text-md text-gray_100 font-medium leading-tight">
                    Personalised learning for every student
                    </p>
                </div>
                <div className="mb-8 md:mb-0 px-6">
                    <img className="mx-auto mb-5" src={featuresEmoji3SVG} alt="" />
                    <p className="lg:px-2 text-md text-gray_100 font-medium leading-tight">
                    Build the foundational skills required for success
                    </p>
                </div>
              </div>
            </div>
            {/*End item two */}
            {/* item three */}
            <div className="mb-8 sm:mb-0 px-10 sm:px-0 w-full sm:w-6/12 md:w-4/12 text-center px-6 bounceUp" data-wow-duration="2s" data-wow-delay="900ms">
              <div>
                <div className="relative mb-10">
                    <span className=" absolute top-0 left-0 right-0 mx-auto opacity-20 bg-blue_100 h-8 w-8 rounded-full block" />
                    <h4 className="receive text-2lg text-gray_100 font-bold leading-tight font-libreFranklin">How?</h4>
                </div>
                <div className="mb-8 px-6">
                    <img className="mx-auto mb-5" src={featuresEmoji4SVG} alt="" />
                    <p className=" lg:px-10 text-md text-gray_100 font-medium leading-tight">
                    Intelligent testing and data analysis
                    </p>
                </div>
                <div className="mb-8 md:mb-0 px-6">
                    <img className="mx-auto mb-5" src={featuresEmoji5SVG} alt="" />
                    <p className="lg:px-4 text-md text-gray_100 font-medium leading-tight">
                    Skill network mapped to the Australian curriculum
                    </p>
                </div>
              </div>
            </div>
            {/*/ End item three */}
          </div>
        </div>
      </div>
    )
};

export default Features;