import React from 'react';
import ReactWOW from 'react-wow';
import propTypes from 'prop-types';

const OurVision = ({visionData}) => {
  return (
    <div className='our-vision-area our-vision-secondary ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='vision-content'>
              <span>Our Vision</span>
              <h2>{visionData?.ourVisionHeader}</h2>
              <p>{visionData?.ourVisionDescription}</p>
            </div>
          </div>
          <div className='col-lg-6'>
            <ReactWOW animation='fadeInRight' delay='0.1s'>
              <div className='about-img'>
                <img src={`${process.env.API_URL}${visionData?.ourVisionImage.url}`} alt='our-vision-image' />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  );
};

OurVision.propTypes = {
  visionData: propTypes.object.isRequired,
};

export default OurVision;
