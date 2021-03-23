import BposApiAxiosInstance from './instances/BposAPI';

// Get Whats New Data
export const GetNewsAndEventsData = () => {
  const config = {
    url: '/news-and-events',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};

// Get Whats New Article by Slug
export const GetNewsAndEventBySlug = slug => {
  const config = {
    url: `/news-and-events?slug=${slug}`,
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};
