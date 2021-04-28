import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const LandingLayout = (props) => {
  return (
    <div>
    <Header />
        {props.children}
      <Footer />
    </div>
  );
}

export default LandingLayout;