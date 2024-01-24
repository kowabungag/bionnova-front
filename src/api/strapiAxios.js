import axios from 'axios';

// const strapiAxios = axios.create({baseURL: process.env.NEXT_PUBLIC_STRAPI_BACKEND})

const strapiAxios = axios.create({ baseURL: 'https://api-bioinnova.onrender.com/' });

export default strapiAxios;
