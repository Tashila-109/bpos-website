import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';

const AssetContent = ({assetData}) => {
  return (
    <React.Fragment>
      <div className='achievement-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='achievement-content asset-content'>
                <span>Most Valued Asset</span>
                <h2>{assetData?.valuedAssetHeader}</h2>
                <p>{assetData?.valuedAssetDescription}</p>
                <Link href='/contact'>
                  <a className='default-btn'>Be Connected</a>
                </Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='video-img'>
                <img src={`${process.env.API_URL}${assetData?.valuedAssetImage.url}`}  alt='valued-asset' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

AssetContent.propTypes = {
  assetData: propTypes.object.isRequired,
};

export default AssetContent;
