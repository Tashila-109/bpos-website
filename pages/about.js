import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/About/AboutUsContent';
import OurMission from '../components/About/OurMission';
import OurVision from '../components/About/OurVision';
import AboutUsContentTwo from '../components/About/AboutUsContentTwo';
import ProcessContent from '../components/About/ProcessContent';
import AssetContent from '../components/About/AssetContent';
import Footer from '../components/_App/Footer';

const About = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='About Us' homePageUrl='/' homePageText='Home' activePageText='About Us' />
      <AboutUsContent />
      <OurMission />
      <OurVision />
      <AboutUsContentTwo />
      <div className='pt-100'>
        <ProcessContent />
      </div>
      <div className='pt-100'>
        <AssetContent />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
