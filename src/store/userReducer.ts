import {makeAutoObservable} from "mobx";

class UserReducer {
    _isAuth: boolean = false
    _isAdmin: boolean = false
    _data: IUser | null = null

    constructor() {
        makeAutoObservable(this)
    }

    get isAuth() {
        return this._isAuth
    }

    set isAuth(bool: boolean) {
        this._isAuth = bool
    }

    get isAdmin() {
        return this._isAdmin
    }

    set isAdmin(bool: boolean) {
        this._isAdmin = bool
    }

    get data() {
        return this._data!
    }

    set data(data: IUser) {
        console.log('frpm usrR',data)
        this._data = data
    }

}

export default new UserReducer()