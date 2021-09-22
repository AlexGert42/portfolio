import React, {HTMLAttributes} from 'react';
import styles from './Button.module.scss';


type ButtonType = HTMLAttributes<HTMLButtonElement> & {
    error?: string
    clickHender: () => void
}

export const Button: React.FC<ButtonType> = ({
                                                 clickHender,
                                                 error,
                                                 className,
                                                 ...props
                                             }) => {

    const finalClassName = `${className} ${styles.button}`

    return (
        <>
            <button
                onClick={clickHender}
                className={finalClassName}
                {...props}
            >{props.children}</button>
            {error && <p>{error}</p>}
        </>
    )
}