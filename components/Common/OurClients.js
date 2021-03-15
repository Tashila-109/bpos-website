import React from 'react';
import dynamic from 'next/dynamic';
import propTypes from 'prop-types';
import Link from 'next/link';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

import {Clients} from '../../constants/Clients';

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

const OurClients = ({clients}) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className='testimonial-area ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <span>Our Clients</span>
          <h2>Our Clients</h2>
        </div>

        {display ? (
          <OwlCarousel className='testimonial-wrap-two owl-carousel owl-theme' {...options}>
            {clients.map(value => (
              <div key={value.id} className='single-client'>
                <Link href={value.url ? value.url : '#'}>
                  <div className='client-text'>
                    <img src={`${process.env.API_URL}${value?.image.url}`} alt={`client-${value.id}`} />
                    <h3>{value.name}</h3>
                    <span>{value.country}</span>
                  </div>
                </Link>

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

OurClients.propTypes = {
  clients: propTypes.array,
};
OurClients.defaultProps = {
  clients: [],
};
export default OurClients;
