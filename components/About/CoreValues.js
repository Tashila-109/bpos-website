import React from 'react';
import propTypes from 'prop-types';

const CoreValues = ({coreValuesData}) => {
  return (
    <div className='about-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6'>
            <div className='about-content'>
              <span>Core Values</span>
              <h2>{coreValuesData?.coreValuesHeader}</h2>
              <p>{coreValuesData?.coreValuesDescription}</p>
              {/* <div className='about-list'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='about-single-list list-2'>
                      <i className='flaticon-social-care-1'></i>
                      <span>We are always Care about Client Satisfy</span>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='about-single-list'>
                      <i className='flaticon-target'></i>
                      <span>100+ Community Involvement</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='about-img-3'>
              <img src='/images/about-img-3.jpg' alt='Image' />
              <div className='about-img-2'>
                <img src={`${process.env.API_URL}${coreValuesData?.coreValuesImage.url}`} alt='core-values-image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoreValues.propTypes = {
  coreValuesData: propTypes.object.isRequired,
};

export default CoreValues;
