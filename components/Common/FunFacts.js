import React from 'react';
import propTypes from 'prop-types';

const FunFacts = ({companyData}) => {
  return (
    <div className='counter-area pt-100 pb-70'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-counter'>
              <h2>{companyData?.factOne}</h2>
              <p>{companyData?.factOneDescription}</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-counter'>
              <h2>{companyData?.factTwo}</h2>
              <p>{companyData?.factTwoDescription}</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-counter'>
              <h2>
                {companyData?.factThree} <span className='traget'>+</span>
              </h2>
              <p>{companyData?.factThreeDescription}</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-counter'>
              <h2>{companyData?.factFour}</h2>
              <p>{companyData?.factFourDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FunFacts.propTypes = {
  companyData: propTypes.object.isRequired,
};

export default FunFacts;
