import React from 'react';
import propTypes from 'prop-types';

import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import NewsAndEventsGrid from '../components/NewsAndEvents/NewsAndEventsPage/NewsAndEventsGrid';
import Footer from '../components/_App/Footer';

import {GetNewsAndEventsData} from '../api/NewsAndEventsApi';

const NewsAndEvents = ({data}) => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='News & Events' homePageUrl='/' homePageText='Home' activePageText='News & Events' />
      <NewsAndEventsGrid articleData={data} />
      <Footer />
    </React.Fragment>
  );
};

NewsAndEvents.propTypes = {
  data: propTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const {data} = await GetNewsAndEventsData();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};

export default NewsAndEvents;
