import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mynotespwi.herokuapp.com/api'
});

export default instance;
