import BposApiAxiosInstance from './instances/BposAPI';

// Get Home Page Data
export const GetHomePageData = () => {
  const config = {
    url: '/home-page',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};