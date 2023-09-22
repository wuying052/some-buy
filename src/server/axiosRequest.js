import axios from "axios";

const axiosRequest = axios.create({
    baseURL: 'http://localhost:5001/',
    // baseURL: "http://192.168.7.127:8080",
    method: 'post',
    timeout: 40000,
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      "Content-Type": "application/json",
      // 'Access-Control-Allow-Origin': '*',
      // "access-control-allow-credentials":'true',
      // withCredentials: true
    },
  });

  export default axiosRequest