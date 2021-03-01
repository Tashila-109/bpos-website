import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';
import Image from 'next/image';

import {articleDateFormat} from '../../helpers/dateHelper';

const ArticleBody = ({article}) => {
  return (
    <div className='col-lg-8 col-md-12'>
      <div className='blog-details-desc'>
        <div className='article-image'>
          <Image
            width='730'
            height='500'
            src={`${process.env.API_URL}${article?.bannerImage?.url}`}
            alt={`Image-${article?.articleName}`}
          />
        </div>

        <div className='article-content'>
          <div className='entry-meta'>
            <ul>
              <li>
                <span>Posted On:</span>
                <a>{articleDateFormat(article?.published_at)}</a>
              </li>
              <li>
                <span>Posted By:</span>
                <a>{article?.authorName}</a>
              </li>
            </ul>
          </div>

          <h3>{article?.articleName}</h3>

          <p>
            Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam dolor sit, consectetur.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.
          </p>

          <blockquote className='flaticon-quote'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid praesentium eveniet illum asperiores, quidem,
              ipsum voluptatum numquam ducimus nisi exercitationem dolorum facilis Repellendus aliquid praesentium eveniet illum asperiores.
            </p>
          </blockquote>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in sed quia non numquam.
          </p>
        </div>

        <div className='post-navigation'>
          <div className='navigation-links'>
            <div className='nav-previous'>
              <Link href='#'>
                <a>
                  <i className='bx bx-left-arrow-alt'></i> Prev Post
                </a>
              </Link>
            </div>
            <div className='nav-next'>
              <Link href='#'>
                <a>
                  Next Post <i className='bx bx-right-arrow-alt'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;

ArticleBody.propTypes = {
  article: propTypes.object.isRequired,
};
