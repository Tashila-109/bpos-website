import React from 'react';
import propTypes from 'prop-types';

import Navbar from '../components/_App/Navbar';
import MainBannerSlider from '../components/HomeThree/MainBannerSlider';
import OurFeatures from '../components/HomeThree/OurFeatures';
import AboutUs from '../components/HomeThree/AboutUs';
import OurServices from '../components/HomeThree/OurServices';
import FunFacts from '../components/Common/FunFacts';
import OffersArea from '../components/Common/OffersArea';
import ContactComponent from '../components/Common/ContactComponent';
import TeamSlider from '../components/Common/TeamSlider';
import OurPartners from '../components/HomeThree/OurPartners';
import OurClients from '../components/Common/OurClients';
import Footer from '../components/_App/Footer';

import {GetHomePageData} from '../api/PagesApi';

const Index = ({data}) => {
  return (
    <React.Fragment>
      <Navbar />
      <MainBannerSlider bannerData={data} />
      <OurFeatures featuresData={data} />
      <AboutUs aboutUsData={data}/>
      <OurServices businessVerticals={data?.services} />
      <FunFacts companyData={data.companyFacts} />
      <OurPartners partners={data.partners?.partners} />
      <OurClients clients={data.clients?.clients} />
      <ContactComponent contactInformation={data?.contact} />
      <TeamSlider shareholderData={data?.shareholders} />
      <div className='pb-100'>
        <OffersArea />
      </div>
      <Footer />
    </React.Fragment>
  );
};

Index.propTypes = {
  data: propTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const {data} = await GetHomePageData();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};

export default Index;
