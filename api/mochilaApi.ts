import axios from 'axios';

const mochilaApi = axios.create({
    baseURL: '/api',
})

export default mochilaApi;