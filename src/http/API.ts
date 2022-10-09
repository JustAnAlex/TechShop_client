import axios from "axios";
import jwt_decode from "jwt-decode";

const URL = `http://${window.location.hostname}:${process.env.BACKEND_PORT}/`

// axios create instance 
const auth_host = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: process.env.REACT_APP_API_URL || URL,
    //baseURL: 'http://192.168.1.7:5000/',
    timeout: 10000
});

// axios create interceptors 
auth_host.interceptors.request.use(config => {
    config.headers!.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
});

auth_host.interceptors.response.use(({data}:{data:string}) => {
    localStorage.setItem('token', data)
    const decoded: IUser = jwt_decode(data)
    return decoded;
});

const host = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: process.env.REACT_APP_API_URL || URL,
    timeout: 10000
});

export default class API {
    static registration = async ({email, password}: IForm) => {
        const answer: IUser = await auth_host.post('/api/user/registration',{email, password})
        console.log('registration', answer)
        return answer
    }

    static checkAuthorization = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            const newToken:IUser = await auth_host.get('/api/user/check')
            console.log('checkAuthorization', newToken)
            return newToken
        }
        throw new Error('Отсутствует JWT')
    }

    static login = async ({email, password}: IForm) => {
        const answer:IUser = await auth_host.post('/api/user/login',{email, password})
        //const answer:IUser = await axios.post('/api/user/login',{email, password})
        return answer
    }

    static loadTypes = async () => {
        console.log('API loadTypes')
        const answer: Array<ITypes> = (await host.get('/api/type')).data
        return answer
    }

    static loadDevice = async (typeId: number | null, brandId: number | null) => {
        console.log('API loadDevice')
        const answer: ILoadDevice = (await host.get('/api/device', { params: {
            typeId,
            brandId
        }})).data
        console.log('loadDevice', answer)
        return answer
    }
}

