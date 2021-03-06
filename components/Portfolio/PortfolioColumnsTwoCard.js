import React from 'react';
import Link from 'next/link';

const PortfolioColumnsTwoCard = () => {
  return (
    <div className='portfolio-area pt-100 pb-70'>
      <div className='container'>
        <div className='portfolio-wraps'>
          <div className='shorting'>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='single-portfolio'>
                  <div className='portfolio-image bg-1'>
                    <div className='price-wrap'></div>
                  </div>
                  <div className='portfolio-content'>
                    <div>
                      <span>Coaching</span>

                      <h3>
                        <Link href='/whatsnew-details'>
                          <a>Business Growth</a>
                        </Link>
                      </h3>

                      <Link href='/whatsnew-details'>
                        <a className='read-more'>View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='single-portfolio'>
                  <div className='portfolio-image bg-2'>
                    <div className='price-wrap'></div>
                  </div>
                  <div className='portfolio-content'>
                    <div>
                      <span>Facilitation</span>

                      <h3>
                        <Link href='/whatsnew-details'>
                          <a>Digital Analysis</a>
                        </Link>
                      </h3>

                      <Link href='/whatsnew-details'>
                        <a className='read-more'>View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='single-portfolio'>
                  <div className='portfolio-image bg-3'>
                    <div className='price-wrap'></div>
                  </div>
                  <div className='portfolio-content'>
                    <div>
                      <span>Coaching</span>

                      <h3>
                        <Link href='/whatsnew-details'>
                          <a>Chan Agency</a>
                        </Link>
                      </h3>

                      <Link href='/whatsnew-details'>
                        <a className='read-more'>View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='single-portfolio'>
                  <div className='portfolio-image bg-4'>
                    <div className='price-wrap'></div>
                  </div>
                  <div className='portfolio-content'>
                    <div>
                      <span>Strategy</span>

                      <h3>
                        <Link href='/whatsnew-details'>
                          <a>Data Analytics</a>
                        </Link>
                      </h3>

                      <Link href='/whatsnew-details'>
                        <a className='read-more'>View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='single-portfolio'>
                  <div className='portfolio-image bg-5'>
                    <div className='price-wrap'></div>
                  </div>

                  <div className='portfolio-content'>
                    <div>
                      <span>Facilitation</span>

                      <h3>
                        <Link href='/whatsnew-details'>
                          <a>Court Imperial</a>
                        </Link>
                      </h3>

                      <Link href='/whatsnew-details'>
                        <a className='read-more'>View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='single-portfolio'>
                  <div className='portfolio-image bg-6'>
                    <div className='price-wrap'></div>
                  </div>

                  <div className='portfolio-content'>
                    <div>
                      <span>Stakeholder Relations</span>

                      <h3>
                        <Link href='/whatsnew-details'>
                          <a>Revenue Growth</a>
                        </Link>
                      </h3>

                      <Link href='/whatsnew-details'>
                        <a className='read-more'>View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioColumnsTwoCard;
