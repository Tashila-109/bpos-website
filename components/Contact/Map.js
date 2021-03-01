import React from 'react';

const Map = () => {
  return (
    <div className='map-area'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14624.336244720782!2d58.360306237931745!3d23.601318017492797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e0002fee32d27%3A0x10f206c3d9600042!2sAzaiba%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2slk!4v1613979425243!5m2!1sen!2slk'
        width='600'
        height='450'
        allowFullscreen=''
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default Map;
