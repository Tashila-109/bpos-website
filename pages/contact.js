import React from 'react';
import propTypes from 'prop-types';

import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Contact/Map';
import Footer from '../components/_App/Footer';

import {GetContactPageData} from '../api/PagesApi';

const Contact = ({data}) => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Contact' homePageUrl='/' homePageText='Home' activePageText='Contact' />
      <ContactForm contactData={data} />
      <Map />
      <Footer />
    </React.Fragment>
  );
};

Contact.propTypes = {
  data: propTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const {data} = await GetContactPageData();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};

export default Contact;
