import {makeAutoObservable, runInAction} from "mobx";
import axios from "axios";

class TypesReducer {
    isLoading = false
    data = null
    currentType = null

    constructor() {
        makeAutoObservable(this)
    }

    async loadTypes() {
        this.isLoading = true
        const answer = await axios({
            method: 'get',
            url: '/api/type'
        })
        runInAction(() => {
            this.data = answer.data
            this.isLoading = false
            if (answer.data.length) {
                //this.currentType = answer.data?.[0]?.id
            }
        })
    }

    changeTypes(type) {
        this.currentType = type
    }

}

export default new TypesReducer()