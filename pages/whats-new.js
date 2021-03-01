import React from 'react';
import propTypes from 'prop-types';

import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WhatsNewGrid from '../components/WhatsNew/WhatsNewPage/WhatsNewGrid';
import Footer from '../components/_App/Footer';

import {GetWhatsNewData} from '../api/WhatsNewApi';

const WhatsNew = ({data}) => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Whats New' homePageUrl='/' homePageText='Home' activePageText='Whats New' />
      <WhatsNewGrid articleData={data?.data} />
      <Footer />
    </React.Fragment>
  );
};

WhatsNew.propTypes = {
  data: propTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const data = await GetWhatsNewData();

  return {
    props: {
      data,
    },
    revalidate: 1
  };
};

export default WhatsNew;
