import {makeAutoObservable, runInAction} from "mobx";
import API from "../http/API";

class TypesReducer {
    isLoading = false
    data = null
    currentType = null
    currentBrand = null

    constructor() {
        makeAutoObservable(this)
    }

    async loadTypes() {
        this.isLoading = true
        const answer = await API.loadTypes()
        runInAction(() => {
            this.data = answer.data
            this.isLoading = false
            // if (answer.data.length) {
            //     this.currentType = answer.data?.[0]?.id
            // }
        })
    }

    changeTypes(type) {
        this.currentType = type
    }

}

export default new TypesReducer()