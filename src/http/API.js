import axios from "axios";
import jwt_decode from "jwt-decode";

const host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000
});

host.interceptors.request.use(config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
});

host.interceptors.response.use(({data}) => {
    console.log(data)
    localStorage.setItem('token', data)
    return jwt_decode(data);
});

export default class API {
    static registration = async ({email, password}) => {
        return await host.post('/api/user/registration',{email, password})
    }

    static checkAuthorization = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            console.log(token)
            const newToken = await host.get('/api/user/check')
            return newToken
        }
        throw new Error('Отсутствует JWT')
    }

    static login = async ({email, password}) => {
        return await host.post('/api/user//login',{email, password})
    }
}



