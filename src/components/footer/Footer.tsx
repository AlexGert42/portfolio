import React from 'react'
import styles from './Footer.module.scss'

import github from '../../imgs/icons/Github_white.svg'
import telegram from '../../imgs/icons/Telegram.svg'
import linkIn from '../../imgs/icons/in.svg'
import hh from '../../imgs/icons/hh.svg'


export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={"container"}>
                <div className={styles.footer__inner}>
                    <p className={styles.footer__reserved}>2021 @All rights reserved</p>
                    <div className={styles.footer__social}>
                        <a href="#"><img src={github} alt="GH"/></a>
                        <a href="#"><img src={telegram} alt="TL"/></a>
                        <a href="#"><img src={hh} alt="HH"/></a>
                        <a href="#"><img src={linkIn} alt="IN"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}