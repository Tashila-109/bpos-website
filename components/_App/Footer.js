import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className='footer-top-area pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-widget'>
                <Link href='/'>
                  <a>
                    <img src='/images/logo.png' alt='Image' className='footer-logo' />
                  </a>
                </Link>

                <p>
                  Lorem ipsum dolor sitamet,cons adipiscing elit, sed do eiusmod te incididunt ut labore et dolore Lorem
                  ipsum dolor sitamet,cons adipiscing dolore Lorem ipsum dolor.
                </p>

                <div className='social-area'>
                  <ul>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bxl-youtube'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bxl-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-widget contact'>
                <h3>Contact Us</h3>

                <ul>
                  <li>
                    <i className='flaticon-call'></i>
                    <span>Hotline:</span>
                    <a href='tel:+822456974'>Phone: +822456974</a>
                  </li>

                  <li>
                    <i className='flaticon-email'></i>
                    <span>Email:</span>
                    <a href='mailto:hello@flexa.com'>hello@bposllc.com</a>
                  </li>

                  <li>
                    <i className='flaticon-maps-and-flags'></i>
                    <span>Address:</span>
                    123, Western Road, Melbourne Australia
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-widget'>
                <h3>Resources</h3>

                <ul>
                  <li>
                    <Link href='/about'>
                      <a>Abouts Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>Services</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className='footer-bottom-area footer-bottom-electronics-area'>
        <div className='container'>
          <div className='copy-right'>
            <p>
              Copyright @{currentYear} BPOS LLC Designed By{' '}
              <a href='https://kryolabz.com/' target='blank'>
                Kryo Labz
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
