import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

import { GetClientsPageData } from '../api/PagesApi';

const ClientsComponent = ({ data }) => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Clients' homePageUrl='/' homePageText='Home' activePageText='Clients' />

      <div className='team-section ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>{data?.clientsHeader}</h2>
            <p>{data?.clientsDescription}</p>
          </div>
          <div className='row'>
            {data.client?.clients?.map(value => (
              <div key={`${value.id}-client`} className='col-lg-4 col-md-6 col-sm-6'>
                <Link href={value.url ? value.url : '#'}>
                  <div className='single-team'>
                    <div className='image'>
                      <img src={`${process.env.API_URL}${value?.image.url}`} alt={`client-${value.id}-image`} />
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

ClientsComponent.propTypes = {
  data: propTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const { data } = await GetClientsPageData();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};

export default ClientsComponent;
