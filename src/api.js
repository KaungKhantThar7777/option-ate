import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/gYz0LSXxeLzhcb3VLYIhhYRO2TxQ9ou1',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};

export default api;
