import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';

const OurFeatures = ({featuresData}) => {
  return (
    <div className='choose-us-area-three pt-100 pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>{featuresData?.coreValuesSectionSubHeader}</span>
          <h2>{featuresData?.coreValuesSectionHeader}</h2>
          <p>{featuresData?.coreValuesSectionDescription}</p>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-sm-6'>
            <div className='single-choose'>
              <span className='flaticon-kindness'></span>
              <h3>{featuresData?.ourMissionTitle}</h3>
              <p>{featuresData?.ourMission}</p>
              <Link href='/about'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='single-choose'>
              <span className='flaticon-target'></span>
              <h3>{featuresData?.ourVisionTitle}</h3>
              <p>{featuresData?.ourVision}</p>
              <Link href='/about'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6 offset-sm-3 offset-lg-0'>
            <div className='single-choose'>
              <span className='flaticon-experience'></span>
              <h3>{featuresData?.ourValuesTitle}</h3>
              <p>{featuresData?.coreValues}</p>
              <Link href='/about'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OurFeatures.propTypes = {
  featuresData: propTypes.object.isRequired,
};

export default OurFeatures;
