import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';

import { articleDateFormat } from '../../../helpers/dateHelper';

const WhatsNewGrid = ({ articleData }) => {
  return (
    <div className='blog-area ptb-100'>
      <div className='container'>
        <div className='row'>
          {articleData &&
            articleData?.map((value, index) => (
              <div key={`whats-new-article-${value?.id}`} className='col-lg-4 col-md-6'>
                <div className='single-blog'>
                  <Link href='/whats-new/[slug]' as={`/whats-new/${value?.slug}`}>
                    <a>
                      <img
                        style={{ minHeight: '270px', minWidth: '350px', maxHeight: '270px', maxWidth: '350px' }}
                        src={`${process.env.API_URL}${value?.bannerImage?.url}`}
                        alt={`Image-${value?.articleName}`}
                      />
                    </a>
                  </Link>

                  <div className='blog-content'>
                    <ul>
                      <li>{articleDateFormat(value?.published_at)}</li>
                      <li>
                        <a>{value?.authorName}</a>
                      </li>
                    </ul>

                    <Link href='/whats-new/[slug]' as={`/whats-new/${value?.slug}`}>
                      <a>
                        <h3>{value?.articleName}</h3>
                      </a>
                    </Link>

                    <Link href='/whats-new/[slug]' as={`/whats-new/${value?.slug}`}>
                      <a className='read-more'>
                        Read More <i className='bx bx-plus'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
