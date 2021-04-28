import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

const MainBanner = () => {
  return (
    <div className='main-banner-area'>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='banner-text'>
              <ReactWOW animation='fadeInUp' delay='0.1s'>
                <span>Thank you for visiting us</span>
              </ReactWOW>

              <ReactWOW animation='fadeInUp' delay='0.2s'>
                <h1>Our webiste is currently under maintenance.</h1>
              </ReactWOW>

              <ReactWOW animation='fadeInUp' delay='0.4s'>
                <p>We will be going live soon.</p>
              </ReactWOW>
            </div>
          </div>

          <div className='col-lg-6 pr-0'>
            <ReactWOW animation='fadeInUp' delay='0.2s'>
              <div className='banner-img'>
                <img src='/images/logo.png' alt='Image' />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className='shape'>
        <img src='/images/banner/banner-shape.png' alt='Image' />
      </div>
      <div className='banner-shape-right'>
        <img src='/images/banner/banner-shape-right.png' alt='Image' />
      </div>
    </div>
  );
};

export default MainBanner;
