import React from 'react';
import propTypes from 'prop-types';

const ProcessContent = ({processData}) => {
  return (
    <React.Fragment>
      <div className='achievement-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='video-img'>
                <img src={`${process.env.API_URL}${processData?.processImage.url}`} alt='process-we-follow' />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='achievement-content'>
                <span>Process</span>
                <h2>{processData?.processHeader}</h2>
                <p>{processData?.processDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

ProcessContent.propTypes = {
  processData: propTypes.object.isRequired,
};

export default ProcessContent;
