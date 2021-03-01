import Axios from 'axios';

import APIHelper from '../../helpers/apiHelper';

const BposApiAxiosInstance = Axios.create({baseURL: process.env.API_URL});

BposApiAxiosInstance.interceptors.response.use(
  response => APIHelper.SuccessResponse(response),
  error => Promise.reject(APIHelper.ErrorResponse(error))
);

export default BposApiAxiosInstance;
