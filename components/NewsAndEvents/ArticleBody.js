import React from 'react';
import propTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';

import {articleDateFormat} from '../../helpers/dateHelper';

const ArticleBody = ({article}) => {
  return (
    <div className='col-lg-12 col-md-12'>
      <div className='blog-details-desc'>
        <div className='article-image'>
          <Image
            layout='fill'
            objectFit='cover'
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
          {/* <h3>{article?.articleName}</h3> */}
          <div className='pt-5'>
            <Markdown>{article?.articleBody}</Markdown>
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
