import React from 'react'
import HeroServiceWrap from '../components/Service/HeroServiceWrap';
import NewReleaseHeroImgArea from '../components/Service/NewReleaseHeroImgArea';
import Feature3Area from '../components/Service/Feature3Area';
import AboutService7Area from '../components/Service/AboutService7Area';
import AboutService3Area from '../components/Service/AboutService3Area';
import TestimonialArea from '../components/Home/TestimonialArea';
import ContactArea from '../components/Home/ContactArea';
import { Helmet } from "react-helmet";  

const ServicePage = () => {
  return (
    <>
    <Helmet>
        <title>Service - Nighwan Technology Pvt. Ltd.</title>
         <meta name="description" content="This is Service page" />
        <meta name="robots" content="index, follow" />
        </Helmet>
        <HeroServiceWrap/>
        <NewReleaseHeroImgArea/>
        <AboutService7Area/>
        <AboutService3Area/>
        <Feature3Area/>
        <TestimonialArea/>
        <ContactArea/>
    </>
  )
}

export default ServicePage