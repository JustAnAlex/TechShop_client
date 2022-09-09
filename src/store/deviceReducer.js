import axios from "axios";
import {makeAutoObservable, runInAction} from "mobx";
import API from "../http/API";

class DeviceReducer {
    isLoading = false
    data = null
    count = 0

    constructor() {
        makeAutoObservable(this)
    }

    async loadDevice(typeId=null, brandId=null) {
        this.isLoading = true
        const answer = await API.loadDevice(typeId=typeId, brandId=brandId)
        runInAction(() => {
            this.data = answer.data.rows
            this.count = answer.data.count
            this.isLoading = false
        })
    }

}

export default new DeviceReducer()