import axios from 'axios'

const BASE_URL='http://localhost:5000/api'
const TOKEN='hg4fds45f5ds4f6sd5f45dF6fdF6wqqDSA '

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});
