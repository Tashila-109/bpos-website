import React from 'react';
import propTypes from 'prop-types';

import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/About/AboutUsContent';
import OurMission from '../components/About/OurMission';
import OurVision from '../components/About/OurVision';
import CoreValues from '../components/About/CoreValues';
import ProcessContent from '../components/About/ProcessContent';
import AssetContent from '../components/About/AssetContent';
import Footer from '../components/_App/Footer';

import {GetAboutPageData} from '../api/PagesApi';

const About = ({data}) => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='About Us' homePageUrl='/' homePageText='Home' activePageText='About Us' />
      <AboutUsContent aboutUsData={data} />
      <OurMission missionData={data} />
      <OurVision visionData={data} />
      <CoreValues coreValuesData={data} />
      <div className='pt-100'>
        <ProcessContent processData={data} />
      </div>
      <div className='pt-100'>
        <AssetContent assetData={data} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

About.propTypes = {
  data: propTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const {data} = await GetAboutPageData();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};

export default About;
