import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID RQzv-a125q5FIazXue0gmxKb7HNNK1D3OngjtpBTvl0'
  }
});
