import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

import {Clients} from '../constants/Clients';

const ClientsComponent = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Clients' homePageUrl='/' homePageText='Home' activePageText='Clients' />

      <div className='team-section ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Clients</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>

          <div className='row'>
            {Clients.map((value, index) => (
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='single-team'>
                  <div className='image'>
                    <img src={`/images/testimonials/client${index + 1}.jpg`} alt={`client-${index + 1}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default ClientsComponent;
