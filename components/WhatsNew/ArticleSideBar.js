import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';

import {articleDateFormat} from '../../helpers/dateHelper';

const ArticleSidebar = ({selectedArticle, articlesData}) => {
  return (
    <div className='widget-area' id='secondary'>
      {/* <div className="widget widget_search">
                <h3 className="widget-title">Search Now</h3>
                <div className="post-wrap">
                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit">
                            <i className='bx bx-search'></i>
                        </button>
                    </form>
                </div>
            </div> */}
      <div className='widget widget-peru-posts-thumb'>
        <h3 className='widget-title'>Popular Posts</h3>
        <div className='post-wrap'>
          {articlesData &&
            articlesData.map((article, index) => {
              let result = null;
              if (index < 5 && selectedArticle.id !== article.id) {
                result = (
                  <div key={`popular-posts-${article?.slug}`} className='item'>
                    <Link href={`/whats-new/${article?.slug}`}>
                      <a className='thumb'>
                        <img
                          width='100'
                          height='80'
                          src={`${process.env.API_URL}${article?.bannerImage?.url}`}
                          alt={`Popular-post-${article?.articleName}`}
                        />
                      </a>
                    </Link>
                    <div className='info'>
                      <span>{articleDateFormat(article?.published_at)}</span>
                      <h4 className='title usmall'>
                        <Link href='/blog-details'>
                          <a>{article?.articleName}</a>
                        </Link>
                      </h4>
                    </div>
                    <div className='clear'></div>
                  </div>
                );
              }
              return result;
            })}
        </div>
      </div>

      {/* <div className='widget widget_categories'>
        <h3 className='widget-title'>Categories</h3>
        <div className='post-wrap'>
          <ul>
            <li>
              <Link href='#'>
                <a>
                  Mother border <span>(10)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>
                  Tweezers <span>(20)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>
                  Cotton Swabs <span>(10)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>
                  Grounding Strap <span>(12)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>
                  Prebuilt Tool Kits <span>(16)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>
                  Hex Driver <span>(17)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}

      {/* <div className='widget widget_tag_cloud'>
        <h3 className='widget-title'>Tags</h3>
        <div className='post-wrap'>
          <div className='tagcloud'>
            <Link href='#'>
              <a>Auto (3)</a>
            </Link>

            <Link href='#'>
              <a>Home (03)</a>
            </Link>

            <Link href='#'>
              <a>Car (02)</a>
            </Link>

            <Link href='#'>
              <a>Health (02)</a>
            </Link>

            <Link href='#'>
              <a>Life (01)</a>
            </Link>

            <Link href='#'>
              <a>Help (10)</a>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

ArticleSidebar.propTypes = {
  articlesData: propTypes.array,
  selectedArticle: propTypes.object,
};
ArticleSidebar.defaultProps = {
  articlesData: [],
  selectedArticle: {},
};

export default ArticleSidebar;
