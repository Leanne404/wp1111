import axios from 'axios';

const instance = axios.create({
  baseURL: `http://wp1111-mpzx-9mneh7f6h-leanne404.vercel.app/`,
});

export default instance;

// instance.get('/hi').then((data) => console.log(data));
