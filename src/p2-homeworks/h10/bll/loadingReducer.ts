const initState = {

}

export const loadingReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case '': {
            return state
        }
        default: return state
    }
}

export const loadingAC = (loading: boolean): any => {
    const action = {
        type: '',
        loading
    }
} // fix any
