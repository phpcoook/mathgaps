import React, {useEffect} from 'react';
import LandingLayout from '../components/layouts/LandingLayout';
import Features from '../components/sections/Features';
import FindOut from '../components/sections/FindOut';
import Hero from '../components/sections/Hero';
import HowItHelps from '../components/sections/HowItHelps';
import HowItWorks from '../components/sections/HowItWorks';
import Pricing from '../components/sections/Pricing';
import Tutoring from '../components/sections/Tutoring';
import $ from 'jquery'

const Landing = () => {
  useEffect(() => {
      $(window).scrollTop(function () {

        console.log('scroll')
        /**Fixed header**/
        // if ($(window).scrollTop() > 250) {
        //   $(".header").addClass("sticky fade_down_effect");
        // } else {
        //   $(".header").removeClass("sticky fade_down_effect");
        // }
      });
    }, []);

  return (
    <LandingLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <HowItHelps />
      <Tutoring />
      <Pricing />
      <FindOut />
    </LandingLayout>
  );
}

export default Landing;
