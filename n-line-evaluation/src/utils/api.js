import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:1234",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }});


export default API;