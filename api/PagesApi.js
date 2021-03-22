import BposApiAxiosInstance from './instances/BposAPI';

// Get Home Page Data
export const GetHomePageData = () => {
  const config = {
    url: '/home-page',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};

// Get About Us Page Data
export const GetAboutPageData = () => {
  const config = {
    url: '/about-us-page',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};

// Get Shareholders Page Data
export const GetShareholdersPageData = () => {
  const config = {
    url: '/our-shareholders',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};
