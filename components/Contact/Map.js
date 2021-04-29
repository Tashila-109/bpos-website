import React from 'react';

const Map = () => {
  return (
    <div className='map-area'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3945896695723!2d58.3578539149783!3d23.590177484668562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzI0LjYiTiA1OMKwMjEnMzYuMiJF!5e0!3m2!1sen!2slk!4v1619684659009!5m2!1sen!2slk'
        width='600'
        height='450'
        allowFullscreen=''
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default Map;
