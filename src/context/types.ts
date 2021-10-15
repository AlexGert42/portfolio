import React from "react"
import axios from "axios";

export type StateType = {
    showModal: boolean
}
export const initialState: StateType = {
    showModal: false
}

export const Types = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SHOW_MODAL' :
            return {
                ...state,
                showModal: action.payload
            }
        default:
            return state
    }
}


// @ts-ignore
export const RootContext = React.createContext();



