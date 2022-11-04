import axios from 'axios';

const mockApi = axios.create({
    baseURL: 'https://63498b415df952851402890d.mockapi.io/api/v1'
})

export default mockApi;

