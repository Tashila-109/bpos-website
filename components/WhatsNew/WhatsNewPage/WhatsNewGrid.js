import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';

import Image from 'next/image';

const WhatsNewGrid = ({articleData}) => {
  console.log(articleData);
  return (
    <div className='blog-area ptb-100'>
      <div className='container'>
        <div className='row'>
          {articleData &&
            articleData?.map((value, index) => (
              <div key={`whats-new-article-${value?.id}`} className='col-lg-4 col-md-6'>
                <div className='single-blog'>
                  <Link href={`/${value?.slug}`}>
                    <a>
                      <Image width='570' height='400' src={`${process.env.API_URL}${value?.bannerImage?.url}`} alt='Image' />
                    </a>
                  </Link>

                  <div className='blog-content'>
                    <ul>
                      <li>10 April 2020</li>
                      <li>
                        <Link href='#'>
                          <a>{value?.authorName}</a>
                        </Link>
                      </li>
                    </ul>

                    <Link href={`/${value?.slug}`}>
                      <a>
                        <h3>{value?.articleName}</h3>
                      </a>
                    </Link>

                    <Link href={`/${value?.slug}`}>
                      <a className='read-more'>
                        Read More <i className='bx bx-plus'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          <div className='col-lg-12'>
            <div className='page-navigation-area'>
              <ul className='pagination'>
                <li className='page-item'>
                  <Link href='#'>
                    <a className='page-link page-links'>
                      <i className='bx bx-chevrons-left'></i>
                    </a>
                  </Link>
                </li>
                <li className='page-item active'>
                  <Link href='#'>
                    <a className='page-link' href='#'>
                      1
                    </a>
                  </Link>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    2
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    3
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    <i className='bx bx-chevrons-right'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WhatsNewGrid.propTypes = {
  articleData: propTypes.array,
};
WhatsNewGrid.defaultProps = {
  articleData: [],
};

export default WhatsNewGrid;
