import axios from 'axios';

const strapiAxios = axios.create({ baseURL: process.env.STRAPI_BACKEND });

export default strapiAxios;
