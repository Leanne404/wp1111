import axios from 'axios';

const instance = axios.create({
  baseURL: `wp1111-one.vercel.app`,
});

export default instance;

// instance.get('/hi').then((data) => console.log(data));
