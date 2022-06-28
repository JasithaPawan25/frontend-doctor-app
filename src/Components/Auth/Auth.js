import axios from "axios";

const publicuserToken= localStorage.getItem('publicjwt')



console.log("publicuserToken", publicuserToken)

const token = publicuserToken;

axios.interceptors.request.use(
  config  => {
      config.headers.authorization =`Bearer ${token}`;
      console.log(config)
      return config;
  },
  error =>{
      return Promise.reject(error)
  }
)
