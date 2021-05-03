import React from 'react';
import dynamic from 'next/dynamic';

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

const TeamSlider = () => {
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
            <div className='single-team'>
              <div className='image'>
                <img width='530' height='500' src='/images/team/team1.jpg' alt='team-member-1' />
              </div>

              <div className='content'>
                <h3>Dr Amer Al Rawas</h3>
                <span>CEO Tasneea Oil & Gas Technology Group</span>
              </div>
            </div>

            <div className='single-team'>
              <div className='image'>
                <img width='530' height='500' src='/images/team/team2.jpg' alt='team-member-2' />
              </div>

              <div className='content'>
                <h3>Anselm Perera</h3>
                <span>Director/ Chief Executive Officer</span>
              </div>
            </div>

            <div className='single-team'>
              <div className='image'>
                <img width='530' height='500'  src='/images/team/team3.jpg' alt='team-member-3' />
              </div>

              <div className='content'>
                <h3>Aitken Spence Group</h3>
                <span>(Sri Lanka)</span>
              </div>
            </div>

            <div className='single-team'>
              <div className='image'>
                <img width='530' height='500' src='/images/team/team4.jpg' alt='team-member-4' />
              </div>

              <div className='content'>
                <h3>Frances Perera</h3>
                <span>Director</span>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default TeamSlider;
