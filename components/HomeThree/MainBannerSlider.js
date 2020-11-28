import React from 'react';
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
  smartSpeed: 1500,
  autoplayHoverPause: true,
  mouseDrag: true,
  touchDrag: true,
  navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-right'></i>"],
};

const MainBannerSlider = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className='hero-slider-area'>
      {display ? (
        <OwlCarousel className='hero-slider-wrap owl-carousel owl-theme' {...options}>
          <div className='slider-item slider-item-bg-1'>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container'>
                  <div className='slider-text one'>
                    <span>BPOS Global</span>
                    <h1>We Build long lasting Partnerships</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt
                      maxime, minus quas molestiae reiciendis esse natus nisi iure.
                    </p>

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

          <div className='slider-item slider-item-bg-2'>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container'>
                  <div className='slider-text two'>
                    <span>Global Services</span>
                    <h1>Global Process Outsourcing Services LLC</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt
                      maxime, minus quas molestiae reiciendis esse natus nisi iure.
                    </p>

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

          <div className='slider-item slider-item-bg-3'>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container'>
                  <div className='slider-text two'>
                    <span>Services</span>
                    <h1>Our Services span over several domains</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt
                      maxime, minus quas molestiae reiciendis esse natus nisi iure.
                    </p>

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

export default MainBannerSlider;
