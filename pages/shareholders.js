import React from 'react';
import propTypes from 'prop-types';

import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ShareHoldersContent from '../components/About/ShareHoldersContent';
import Footer from '../components/_App/Footer';

import {GetShareholdersPageData} from '../api/PagesApi';

const ShareHolders = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Our Shareholders' homePageUrl='/' homePageText='Home' activePageText='Our Shareholders' />
      <ShareHoldersContent shareholdersData={data?.shareholders} />
      <Footer />
    </React.Fragment>
  );
};

ShareHolders.propTypes = {
  data: propTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const {data} = await GetShareholdersPageData();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};


export default ShareHolders;
