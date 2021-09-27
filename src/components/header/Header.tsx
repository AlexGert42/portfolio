import React, {useEffect, useState} from 'react'
import styles from './Header.module.scss'
// @ts-ignore
import Tilt from 'react-tilt'

import {HashLink} from 'react-router-hash-link';

export const Header: React.FC = () => {

    const [flag, setFlag] = useState<boolean>(false)

    const [sideMenu, setSideMenu] = useState(false)

    const clickHendler = (value: boolean) => {
        setFlag(value)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 150) setSideMenu(true)
            if (window.scrollY <= 150) setSideMenu(false)
        })
    }, [])

    return (
        <>
            {
                flag ?
                    <MenuLayout clickHendler={clickHendler}/>
                    :
                    <header className={`${styles.header} ${sideMenu && styles.scroll}`}>
                        <div className={"container"}>
                            <div className={styles.header__inner}>
                                <h1 className={styles.header__logo}>
                                    <span className={`${styles.header__logo_angle} ${styles.left}`}/>
                                    <HashLink to={'/home#start'}
                                              className={styles.header__logo_text}>PORTFOLIO</HashLink>
                                    <span className={`${styles.header__logo_angle} ${styles.right}`}/>
                                </h1>
                                <div className={styles.header__burger} onClick={() => clickHendler(true)}>
                                    <span/>
                                </div>
                            </div>
                        </div>
                    </header>
            }
        </>

    )
}

type clickHendlerType = {
    clickHendler: (value: boolean) => void
}

const MenuLayout = ({clickHendler}: clickHendlerType) => {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__inner}>

                <span className={styles.menu__cross} onClick={() => clickHendler(false)}/>

                <Tilt options={{max: 5, scale: 1}}>
                    <div className={styles.menu__title}>
                        <span className={styles.menu__title_decor}/>
                        <h1 className={styles.menu__title_text}>
                            <p>First, solve the problem.</p>
                            <p>Then, write the code.</p>
                        </h1>
                    </div>
                </Tilt>

                <nav className={styles.menu__navbar}>
                    <ul className={styles.header__menu_list}>
                        <li className={styles.header__menu_item} onClick={() => clickHendler(false)}>
                            <HashLink to="/home#start">home</HashLink>
                        </li>
                        <li className={styles.header__menu_item} onClick={() => clickHendler(false)}>
                            <HashLink to={'/works#start'}>my works</HashLink>
                        </li>
                        <li className={styles.header__menu_item} onClick={() => clickHendler(false)}>
                            <HashLink to={'/about#start'}>about</HashLink>
                        </li>
                        <li className={styles.header__menu_item} onClick={() => clickHendler(false)}>
                            <HashLink to={'/contacts#start'}>contacts</HashLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


