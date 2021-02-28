import BposApiAxiosInstance from './instances/BposAPI';

// Get Whats New Data
export const GetWhatsNewData = () => {
  const config = {
    url: '/whats-new-articles',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};
