import {makeAutoObservable, runInAction} from "mobx";
import axios from "axios";

class DeviceReducer {
    isLoading = false
    data = null
    count = 0

    constructor() {
        makeAutoObservable(this)
    }

    async loadDevice(typeId=null) {
        this.isLoading = true
        const answer = await axios({
            method: 'get',
            url: '/api/device',
            params: {
                typeId
            }
        })
        runInAction(() => {
            this.data = answer.data.rows
            this.count = answer.data.count
            this.isLoading = false
        })
    }

}

export default new DeviceReducer()