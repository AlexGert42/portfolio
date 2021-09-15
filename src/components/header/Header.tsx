import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.scss'


export const Header: React.FC = () => {

    const [flag, setFlag] = useState(false)

    const clickHendler = () => {
        setFlag(true)
    }

    return (
        <>
            {
                flag ?
                    <BurdgerLayout/>
                    :
                    <header className={styles.header}>
                        <div className={"container"}>
                            <div className={styles.header__inner}>
                                <div className={styles.header__logo}>logo</div>
                                <div className={styles.header__burger} onClick={clickHendler}>
                                    <span/>
                                </div>
                            </div>
                        </div>
                    </header>
            }
        </>

    )
}


const BurdgerLayout = () => {

    return (
        <nav className={styles.header__menu}>
            <ul className={styles.header__menu_list}>
                <li className={styles.header__menu_item}>
                    <NavLink to={'/home'}>home</NavLink>
                </li>
                <li className={styles.header__menu_item}>
                    <NavLink to={'/portfolio'}>portfolio</NavLink>
                </li>
                <li className={styles.header__menu_item}>
                    <NavLink to={'/about'}>about</NavLink>
                </li>
                <li className={styles.header__menu_item}>
                    <NavLink to={'/contacts'}>contacts</NavLink>
                </li>
            </ul>
        </nav>

    )
}