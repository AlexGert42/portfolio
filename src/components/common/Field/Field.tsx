import React, {InputHTMLAttributes, useMemo, useState} from "react";
import styles from './Field.module.scss';

type FieldType = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
    validators?: any[]
}

export const Field = ({validators, ...props}: FieldType) => {
    const [error, setError] = useState('')
    const [blure, setBlure] = useState(false)

    const finalClassName = `${styles.field} ${props.className}`

    useMemo(() => {

        validators?.map(func => {
            setError(func(props.value))
        })
    }, [props.value])


    return (
        <>
            <input
                onBlur={() => setBlure(true)}
                className={finalClassName}
                type="text"
                {...props}
            />
            {error && <span className={styles.error}>{error}</span>}
        </>
    )
}