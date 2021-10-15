import React from 'react';
import {Button} from '../button/Button';
import styles from './ModalWindow.module.scss';
import icon from '../../../imgs/icons/loading.svg'

type ModalWindowType = {
    hide: () => void
}

export const ModalWindow: React.FC<ModalWindowType> = ({hide}) => {
    return (
        <div className={styles.modal__overlay}>
            <div className={styles.modal__window}>
                <h2 className={styles.modal__title}>Thank you very much, I will contact you shortly!</h2>
                <Button className={styles.modal__btn} onClick={() => hide()}>OK</Button>
            </div>
        </div>
    )
}


export const Loader: React.FC = () => {
    return (
        <div className={styles.modal__overlay}>
            <div className={styles.modal__loader}>
                <img src={icon} alt=" "/>
            </div>
        </div>
    )
}
