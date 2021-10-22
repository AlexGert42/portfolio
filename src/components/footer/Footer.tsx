import React, {useContext} from 'react'
import styles from './Footer.module.scss'
import {AppContext} from "../../context/app/appContext";
import {AppStateType} from "../../context/app/AppState";


export const Footer = () => {

    const {links} = useContext<AppStateType>(AppContext)

    return (
        <footer className={styles.footer}>
            <div className={"container"}>
                <div className={styles.footer__inner}>
                    <p className={styles.footer__reserved}>2021 @All rights reserved</p>
                    <div className={styles.footer__social}>
                        {
                            links.map(item => {
                                return (
                                    <a key={item.link} href={item.link}><img src={item.icon} alt=" "/></a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}