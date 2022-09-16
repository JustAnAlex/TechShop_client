import {makeAutoObservable, runInAction} from "mobx";
import API from "../http/API";

type args = number | null

class DeviceReducer {
    isLoading: boolean = false
    data: Array<IDevice> | null = null
    count: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    async loadDevice(typeId: args = null , brandId: args = null) {
        this.isLoading = true
        const answer = await API.loadDevice(typeId, brandId)
        runInAction(() => {
            this.data = answer.rows
            this.count = answer.count
            this.isLoading = false
        })
    }

}

export default new DeviceReducer()