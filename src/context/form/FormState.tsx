import axios from "axios";
import React, {useReducer} from "react";
import {FormContext} from "./formContext";
import {formReducer} from "./formReducer";


export type FormStateType = {
    showModal: boolean
    loading: boolean
}

export const initialState: FormStateType = {
    showModal: false,
    loading: false
}

export type MessageType = {
    name: string
    email: string
    text: string
}


export const FormState = ({children}: any) => {

    const [state, dispatch] = useReducer(formReducer, initialState)

    const showLoading = (value: boolean) => {
        dispatch({
            type: 'SHOW_LOADING',
            payload: value
        })
    }

    const sendMessag = async (message: MessageType) => {
        showLoading(true)
        let res = await axios.post('https://portfolio-nodejs-42.herokuapp.com/message', {...message})
        // let res = await axios.post('http://localhost:3010/message', {...message})
        // console.log(res)
        if (res.status === 200) {
            dispatch({type: 'SHOW_MODAL'})
        }

    }

    const hideModal = () => {
        dispatch({
            type: 'HIDE_MODAL'
        })
    }

    return (
        <FormContext.Provider value={{
            sendMessag,
            hideModal,
            form: state
        }}>
            {children}
        </FormContext.Provider>
    )
}