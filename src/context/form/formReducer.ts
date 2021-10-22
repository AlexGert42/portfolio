import {FormStateType} from "./FormState";


type SendMessagType = {
    type: 'SHOW_MODAL'
}

type ShowLoadingType = {
    type: 'SHOW_LOADING'
    payload: boolean
}

type HideModalType = {
    type: 'HIDE_MODAL'
}


export type ActionType = SendMessagType | ShowLoadingType | HideModalType

export const formReducer = (state: FormStateType, action: ActionType) => {
    switch (action.type) {
        case 'SHOW_MODAL' :
            return {
                ...state,
                showModal: true,
                loading: false
            }
        case 'SHOW_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'HIDE_MODAL':
            return {
                ...state,
                showModal: false
            }

        default:
            return state
    }
}


