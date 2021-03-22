import BposApiAxiosInstance from './instances/BposAPI';

// Get Whats New Data
export const GetServicesData = () => {
  const config = {
    url: '/products-and-services',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};

// Get Whats New Article by Slug
export const GetServiceBySlug = slug => {
  const config = {
    url: `/products-and-services?slug=${slug}`,
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};
