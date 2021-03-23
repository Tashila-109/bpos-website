import React from 'react';
import ReactWOW from 'react-wow';
import propTypes from 'prop-types';

const OurMission = ({missionData}) => {
  return (
    <div className='our-vision-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <ReactWOW animation='fadeInLeft' delay='0.1s'>
              <div className='about-img'>
                <img src={`${process.env.API_URL}${missionData?.ourMissionImage.url}`} alt='mission-image' />
              </div>
            </ReactWOW>
          </div>

          <div className='col-lg-6'>
            <div className='vision-content'>
              <span>Our Mission</span>
              <h2>{missionData?.ourMissionHeader}</h2>
              <p>{missionData?.ourMissionDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OurMission.propTypes = {
  missionData: propTypes.object.isRequired,
};

export default OurMission;
