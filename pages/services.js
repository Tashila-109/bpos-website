import React from 'react';
import propTypes from 'prop-types';

import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import OurServices from '../components/Services/OurServices';
import ServiceDetails from '../components/Services/ServiceDetails';
import ContactComponent from '../components/Common/ContactComponent';
import Footer from '../components/_App/Footer';

import {GetServicesPageData} from '../api/PagesApi';


const Services = ({data}) => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Products & Services' homePageUrl='/' homePageText='Home' activePageText='Products & Services' />
      <OurServices servicesData={data?.products_services} />
      <ServiceDetails />
      <ContactComponent />
      <Footer />
    </React.Fragment>
  );
};

Services.propTypes = {
  data: propTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const {data} = await GetServicesPageData();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};

export default Services;
