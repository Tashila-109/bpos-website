import React from 'react';
import propTypes from 'prop-types';

const ServiceDetails = ({detailsData}) => {
  return (
    <React.Fragment>
      <div className='achievement-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='video-img'>
                <img src='/images/services-details.jpg' alt='process' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='achievement-content'>
                <span>{detailsData?.servicesSubHeaderTwo}</span>
                <h2>{detailsData?.servicesHeaderTwo}</h2>
                <p>{detailsData?.servicesDescriptionTwo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

ServiceDetails.propTypes = {
  detailsData: propTypes.object.isRequired,
};

export default ServiceDetails;
