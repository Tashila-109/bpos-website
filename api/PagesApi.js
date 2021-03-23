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

// Get Products and Services Page Data
export const GetServicesPageData = () => {
  const config = {
    url: '/products-and-services-page',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};

// Get Clients Page Data
export const GetClientsPageData = () => {
  const config = {
    url: '/clients-page',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};

export const GetPartnersPageData = () => {
  const config = {
    url: '/partners-page',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};
