import axios from 'axios'


export const axiosClient = axios.create({
   baseURL:"https://webpack-mern.vercel.app",
    timeout: 1000 * 60 * 5,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  