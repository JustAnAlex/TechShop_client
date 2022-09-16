declare module "*.module.css";
declare module "*.module.scss";

interface IForm {
    email: string, 
    password: string
}

interface IUser {
    id: number,
    email: string,
    role: string,
    iat?: number,
    exp?: number
}

interface ITypes {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string
}

interface IDevice {
    id: 1,
    name: string,
    price: number,
    rating: number,
    img: string,
    createdAt?: string,
    updatedAt?: string,
    typeId: number,
    brandId: number
}

interface ILoadDevice {
    count: number
    rows: Array<IDevice>
}


