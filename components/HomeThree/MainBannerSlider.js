import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 0,
  nav: false,
  items: 1,
  dots: true,
  autoplay: true,
  smartSpeed: 2200,
  autoplayHoverPause: true,
  mouseDrag: true,
  touchDrag: true,
  navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-right'></i>"],
};

const MainBannerSlider = ({ bannerData }) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  const bannerImageOne = bannerData?.bannerImageOne.url || '../images/hero-slider/hero-slider4.jpg';
  const bannerImageTwo = bannerData?.bannerImageTwo.url || '../images/hero-slider/hero-slider1.jpg';
  const bannerImageThree = bannerData?.bannerImageThree.url || '../images/hero-slider/hero-slider3.jpg';
  return (
    <div className='hero-slider-area'>
      {display ? (
        <OwlCarousel className='hero-slider-wrap owl-carousel owl-theme' {...options}>
          <div className='slider-item' style={{ backgroundImage: `url(${process.env.API_URL}${bannerImageOne})` }}>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container'>
                  <div className='slider-text one'>
                    <span>BPOS Global</span>
                    <h1>{bannerData?.bannerHeaderOne}</h1>
                    <p>{bannerData?.bannerDescriptionOne}</p>
                    <div className='slider-btn'>
                      <Link href='/contact'>
                        <a className='default-btn'>Contact Us</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider-item' style={{ backgroundImage: `url(${process.env.API_URL}${bannerImageTwo})` }}>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container'>
                  <div className='slider-text two'>
                    <span>Business Process Outsourcing Services LLC</span>
                    <h1>{bannerData?.bannerHeaderTwo}</h1>
                    <p>{bannerData?.bannerDescriptionTwo}</p>
                    <div className='slider-btn'>
                      <Link href='/contact'>
                        <a className='default-btn'>About Us</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider-item' style={{ backgroundImage: `url(${process.env.API_URL}${bannerImageThree})` }}>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container'>
                  <div className='slider-text two'>
                    <span>Our Services</span>
                    <h1>{bannerData?.bannerHeaderThree}</h1>
                    <p>{bannerData?.bannerDescriptionThree}</p>
                    <div className='slider-btn'>
                      <Link href='/contact'>
                        <a className='default-btn'>Services</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      ) : (
        ''
      )}
    </div>
  );
};

MainBannerSlider.propTypes = {
  bannerData: propTypes.object.isRequired,
};

export default MainBannerSlider;
