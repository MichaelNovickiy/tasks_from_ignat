import {UserType} from "../HW8";

type actionType =  {type: 'sort' | 'check', payload: 'down' | 'up' | 18}

export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1;
                else if (a.name < b.name) return -1;
                else return 0;
            });
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            let newState = state.filter(f => f.age > action.payload)
            return newState
        }
        default:
            return state
    }
}