import BposApiAxiosInstance from './instances/BposAPI';

// Get Whats New Data
export const GetWhatsNewData = () => {
  const config = {
    url: '/whats-new-articles',
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};

// Get Whats New Article by Slug
export const GetArticleBySlug = slug => {
  const config = {
    url: `/whats-new-articles?slug=${slug}`,
    method: 'get',
  };

  return BposApiAxiosInstance.request(config);
};
