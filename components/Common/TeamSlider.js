import React from 'react';
import dynamic from 'next/dynamic';
import propTypes from 'prop-types';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 30,
  nav: false,
  mouseDrag: false,
  touchDrag: false,
  dots: true,
  autoplay: true,
  smartSpeed: 1500,
  autoplayHoverPause: true,
  center: true,

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};

const TeamSlider = ({ shareholderData }) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className='team-area ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <span>Team</span>
          <h2>Meet Our Expert Team</h2>
        </div>

        {display ? (
          <OwlCarousel className='team-wrap owl-carousel owl-theme' {...options}>
            {shareholderData.map(value => (
              <div key={value.id} className='single-team'>
                <div className='image'>
                  <img width='530' height='500' src={`${process.env.API_URL}${value?.shareholderImage.url}`} alt='team-member' />
                </div>

                <div className='content'>
                  <h3>{value?.shareholderMainName}</h3>
                  <span>{value?.shareholderDesignation}</span>
                </div>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

TeamSlider.propTypes = {
  shareholderData: propTypes.array.isRequired,
};

export default TeamSlider;
