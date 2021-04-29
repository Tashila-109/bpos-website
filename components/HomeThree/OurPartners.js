import React from 'react';
import propTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

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

const renderOverflowBodyText = (bodyText, overflowCharacterLimit) => {
  let result = bodyText;
  if (bodyText?.length > overflowCharacterLimit) {
    result = `${bodyText.substring(0, overflowCharacterLimit)}...`;
  }

  return result;
};

const OurPartners = ({ partners }) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className='testimonial-area ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <span>Our Partners</span>
          <h2>Our Strategic Partners</h2>
        </div>

        {display ? (
          <OwlCarousel className='testimonial-wrap-two owl-carousel owl-theme' {...options}>
            {partners.map((value, index) => (
              <div key={value.id} className='single-client'>
                <Link href={value.url ? value.url : '#'}>
                  <div className='client-text'>
                    <img src={`${process.env.API_URL}${value?.image.url}`} alt={`partner-${value.id}`} />
                    <h3>{renderOverflowBodyText(value.name, 20)}</h3>
                    {/* <span>{value.country}</span> */}
                  </div>
                </Link>
                <p>{renderOverflowBodyText(value.description, 245)}</p>
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

OurPartners.propTypes = {
  partners: propTypes.array,
};
OurPartners.defaultProps = {
  partners: [],
};

export default OurPartners;
