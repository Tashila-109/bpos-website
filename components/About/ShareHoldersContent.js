import React from 'react';
import ReactWOW from 'react-wow';
import propTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const ShareHoldersContent = ({shareholdersData}) => {
  return (
    <div className='about-area ptb-100'>
      <div className='container'>
        {shareholdersData.map((shareHolder, index) => {
          let result = null;
          if (index % 2 === 0) {
            result = (
              <div key={`shareholder-${shareHolder?.id}`} className='row align-items-start pb-70'>
                <div className='col-lg-6'>
                  <div className='about-content'>
                    <span>Shareholders</span>
                    <h2>{shareHolder?.shareholderName}</h2>
                    <Markdown>{shareHolder?.shareholderDescription}</Markdown>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <ReactWOW animation='fadeInRight' delay='0.1s'>
                    <div className='about-img'>
                      <img
                        src={`${process.env.API_URL}${shareHolder?.shareholderImage.url}`}
                        alt={shareHolder?.shareholderImage.alternativeText || 'shareholder-image'}
                      />
                    </div>
                  </ReactWOW>
                </div>
              </div>
            );
          } else {
            result = (
              <div key={`shareholder-${shareHolder?.id}`} className='row align-items-start pt-70 pb-70'>
                <div className='col-lg-6'>
                  <ReactWOW animation='fadeInLeft' delay='0.1s'>
                    <div className='about-img'>
                      <img
                        src={`${process.env.API_URL}${shareHolder?.shareholderImage.url}`}
                        alt={shareHolder?.shareholderImage.alternativeText || 'shareholder-image'}
                      />
                    </div>
                  </ReactWOW>
                </div>
                <div className='col-lg-6'>
                  <div className='about-content'>
                    <span>Shareholders</span>
                    <h2>{shareHolder?.shareholderName}</h2>
                    <Markdown>{shareHolder?.shareholderDescription}</Markdown>
                  </div>
                </div>
              </div>
            );
          }
          return result;
        })}
      </div>
    </div>
  );
};

ShareHoldersContent.propTypes = {
  shareholdersData: propTypes.array,
};
ShareHoldersContent.defaultProps = {
  shareholdersData: [],
};

export default ShareHoldersContent;
