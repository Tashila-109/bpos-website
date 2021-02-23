import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

import {Partners} from '../constants/Partners';

const PartnersComponent = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Partners' homePageUrl='/' homePageText='Home' activePageText='Partners' />

      <div className='team-section ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Strategic Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>

          <div className='row'>
            {Partners.map((value, index) => (
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='single-team'>
                  <div className='image'>
                    <img src={`/images/partners/partners${index + 1}.jpg`} alt={`partner-${index + 1}`} />
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

export default PartnersComponent;