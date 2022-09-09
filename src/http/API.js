import axios from "axios";
import jwt_decode from "jwt-decode";

// axios create instance 
const auth_host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000
});

auth_host.interceptors.request.use(config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
});

auth_host.interceptors.response.use(({data}) => {
    localStorage.setItem('token', data)
    return jwt_decode(data);
});



const host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000
});



export default class API {
    static registration = async ({email, password}) => {
        return await auth_host.post('/api/user/registration',{email, password})
    }

    static checkAuthorization = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            const newToken = await auth_host.get('/api/user/check')
            return newToken
        }
        throw new Error('Отсутствует JWT')
    }

    static login = async ({email, password}) => {
        return await auth_host.post('/api/user/login',{email, password})
    }

    static loadTypes = async () => {
        console.log('API loadTypes')
        const answer = await host.get('/api/type')
        return answer
    }

    static loadDevice = async (typeId=null, brandId=null) => {
        console.log('API loadDevice')
        const answer = await host.get('/api/device', { params: {
            typeId,
            brandId
        }})
        return answer
    }
}



