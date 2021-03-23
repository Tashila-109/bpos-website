import React from 'react';
import ReactWOW from 'react-wow';
import propTypes from 'prop-types';

const AboutUsContent = ({aboutUsData}) => {
  return (
    <div className='about-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='about-content'>
              <span>About Us</span>
              <h2>{aboutUsData?.aboutUsHeader}</h2>
              <p>{aboutUsData?.aboutUsDescription}</p>
            </div>
          </div>

          <div className='col-lg-6'>
            <ReactWOW animation='fadeInRight' delay='0.1s'>
              <div className='about-img'>
                <img src={`${process.env.API_URL}${aboutUsData?.aboutUsImage.url}`} alt='about-image' />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUsContent.propTypes = {
  aboutUsData: propTypes.object.isRequired,
};

export default AboutUsContent;
