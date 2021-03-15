import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

const AboutUs = ({aboutUsData}) => {
  return (
    <div className='about-area about-area-three ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6'>
            <div className='about-content'>
              <span>About Us</span>
              <h2>About BPOS Global</h2>
                <p>{aboutUsData?.aboutUsDescription}</p>
              <Link href='/about'>
                <a className='default-btn'>Know Details</a>
              </Link>
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='about-img-3'>
              <Image width='530' height='500' src={`${process.env.API_URL}${aboutUsData?.aboutUsImage.url}`} alt='Home-About-us' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  aboutUsData: propTypes.object.isRequired,
};

export default AboutUs;
