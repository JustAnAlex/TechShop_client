import {makeAutoObservable} from "mobx";

class UserReducer {
    _isAuth = false
    _isAdmin = false
    _data = {}

    constructor() {
        makeAutoObservable(this)
    }

    get isAuth() {
        return this._isAuth
    }

    set isAuth(bool) {
        this._isAuth = bool
    }

    get isAdmin() {
        return this._isAdmin
    }

    set isAdmin(bool) {
        this._isAdmin = bool
    }

    set data(data) {
        this._data = data
    }

}

export default new UserReducer()