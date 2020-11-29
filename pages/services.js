import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import OurServices from '../components/Services/OurServices';
import ServiceDetails from '../components/Services/ServiceDetails';
import GetAFreeQuoteFormStyleTwo from '../components/Common/GetAFreeQuoteFormStyleTwo';
import OurVision from '../components/About/OurVision';
import Footer from '../components/_App/Footer';

const Services = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner
        pageTitle='Products & Services'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Products & Services'
      />
      <OurServices />
      <ServiceDetails />
      <GetAFreeQuoteFormStyleTwo />
      <OurVision />
      <Footer />
    </React.Fragment>
  );
};

export default Services;
