import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

import {Clients} from '../../constants/Clients'

const options = {
  loop: true,
  margin: 30,
  nav: true,
  mouseDrag: false,
  touchDrag: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};

const TestimonialStyleTwo = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className='testimonial-area ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <span>Our Clients</span>
          <h2>Something About Clients Here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>

        {display ? (
          <OwlCarousel className='testimonial-wrap-two owl-carousel owl-theme' {...options}>
            {Clients.map((value, index) => (
              <div className='single-client'>
                <div className='client-text'>
                  <img src={`/images/testimonials/client${index + 1}.jpg`} alt={`client-${index + 1}`} />
                  <h3>{value.name}</h3>
                  <span>{value.country}</span>
                </div>

                <p>{value.description}</p>
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

export default TestimonialStyleTwo;
