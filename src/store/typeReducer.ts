import {makeAutoObservable, runInAction} from "mobx";
import API from "../http/API";

class TypesReducer {
    isLoading: boolean = false
    data: Array<ITypes> | null = null
    currentType: number | null = null
    currentBrand: number | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async loadTypes() {
        this.isLoading = true
        const answer = await API.loadTypes()
        runInAction(() => {
            this.data = answer
            this.isLoading = false
        })
    }

    changeTypes(type : number | null) {
        this.currentType = type
    }

}

export default new TypesReducer()