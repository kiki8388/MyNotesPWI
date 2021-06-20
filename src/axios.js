import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3001/api' || 'https://mynotespwi.herokuapp.com/'
});

export default instance;
