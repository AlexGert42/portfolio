import React from 'react'
import {MessageType} from "../../../context/form/FormState";




export const validators = ({name, email, text}: MessageType) => {
    if (
        requiredField(name) ||
        maxLengthCreator(name) ||
        requiredField(text) ||
        validateEmail(email)
    ) {

        return false
    } else {
        return true
    }
}

export const requiredField = (value: string) => {
    if (value.trim()) {
        return ''
    } else {
        return 'field is required'
    }
}

export const maxLengthCreator = (value: string, maxLength: number = 30) => {
    if (value.length <= maxLength) {
        return ''
    } else {
        return `Max length is ${maxLength} sumbols`
    }
}

export const validateEmail = (value: string) => {
    const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (reg.test(String(value).toLowerCase())) {
        return ''
    } else {
        return 'Incorrect Email'
    }
}

