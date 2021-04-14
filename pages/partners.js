import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

import { GetPartnersPageData } from '../api/PagesApi';

const PartnersComponent = ({ data }) => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Partners' homePageUrl='/' homePageText='Home' activePageText='Partners' />

      <div className='team-section ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>{data?.partnersHeader}</h2>
            <p>{data?.partnersDescription}</p>
          </div>

          <div className='row'>
            {data.partner?.partners?.map((value, index) => (
              <div key={value.id} className='col-lg-4 col-md-6 col-sm-6'>
                <Link href={value.url ? value.url : '#'}>
                  <div className='single-team'>
                    <div className='image'>
                      <img src={`${process.env.API_URL}${value?.image.url}`} alt={`partner-${value.id}-image`} />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

PartnersComponent.propTypes = {
  data: propTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const { data } = await GetPartnersPageData();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};

export default PartnersComponent;
