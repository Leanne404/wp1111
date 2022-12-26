import axios from 'axios';

const instance = axios.create({
  baseURL: `https://wp1111-imikhp5tt-leanne404.vercel.app`,
});

export default instance;

// instance.get('/hi').then((data) => console.log(data));
