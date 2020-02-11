import axios from 'axios';
import storage from '../storage';

const TOKEN_KEY = 'app-token';

export default () => {
  axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
  axios.defaults.headers.common.Authorization = `Bearer ${storage.get(TOKEN_KEY)}`;
  axios.defaults.headers.common.Accept = 'application/json';

  return axios;
};
