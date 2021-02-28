import Axios from 'axios';

const BposApiAxiosInstance = Axios.create({baseURL: process.env.API_URL});

export default BposApiAxiosInstance;
