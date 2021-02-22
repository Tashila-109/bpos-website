import React from 'react';

const FunFacts = () => {
  return (
    <div className='counter-area pt-100 pb-70'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-counter'>
              <h2>
                2008
              </h2>
              <p>Established In</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-counter'>
              <h2>
                15
              </h2>
              <p>Team of Professionals</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-counter'>
              <h2>
                50 <span className='traget'>+</span>
              </h2>
              <p>Projects Implemented & Delivered</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-counter'>
              <h2>
                First
              </h2>
              <p>Registered company in Oman for ATM management activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
