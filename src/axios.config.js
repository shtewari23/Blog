import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://conduit.productionready.io'
});



instance.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json';
    config.headers.Accept = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = '*';
    if (!config.headers.Authorization) {
      const token= sessionStorage.getItem("token");
      console.log(token)



      if (token && token != 'undefined') {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => Promise.reject(error)
);

export default instance