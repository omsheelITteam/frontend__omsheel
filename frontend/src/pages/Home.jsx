import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import HeaderPage from "../components/HeaderPage";
import Ourbranches from "../components/Ourbranches";
import Example from "../components/CompanyMap";
import GetinTouch from "../components/GetinTouch";
import EmailVerification from "./EmailVerification";
import OurAssociatePartners from "../components/OurAssociatePartners";
import CardFlipper from "../components/CardFlipper";
import ErrorBoundary from "../components/ErrorBoundary";
import CompanyMap from "../components/CompanyMap";
import OmsheelContent from "../components/OmsheelContent";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
   useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo(0, 0);
  }, [HeroSection]);


  return (
    <div>
      <ErrorBoundary>
        <HeroSection />
        <CardSection />
        <Ourbranches />
        <OmsheelContent/>
        <WhyChooseUs/>
        <WhatWeOffer/>
        <GetinTouch />
        <CompanyMap /> 
              </ErrorBoundary>
    </div>
  );
};

export default Home;
