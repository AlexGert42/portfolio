import React, {InputHTMLAttributes} from "react";
import styles from './Field.module.scss';

type FieldType = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
}

export const Field = ({error, ...props}: FieldType) => {

    const finalClassName = `${styles.field} ${props.className}`

    return (
        <div className={finalClassName}>
            <input
                {...props}
            />
            {error && <span>{error}</span>}
        </div>
    )
}

type FieldAreaType = InputHTMLAttributes<HTMLTextAreaElement> & {
    error?: string
}

export const FieldArea = ({error, ...props}: FieldAreaType) => {

    const finalClassName = `${styles.fieldarea} ${props.className}`

    return (
        <div className={finalClassName}>
            <textarea
                {...props}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    )
}