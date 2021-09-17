import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.scss'


export const Header: React.FC = () => {

    const [flag, setFlag] = useState<boolean>(false)

    const clickHendler = (value: boolean) => {
        setFlag(value)
    }

    return (
        <>
            {
                flag ?
                    <BurdgerLayout clickHendler={clickHendler}/>
                    :
                    <header className={styles.header}>
                        <div className={"container"}>
                            <div className={styles.header__inner}>
                                <h1 className={styles.header__logo}>
                                    <span className={`${styles.header__logo_angle} ${styles.left}`}/>
                                    <p className={styles.header__logo_text}>PORTFOLIO</p>
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

const BurdgerLayout: React.FC<clickHendlerType> = ({clickHendler}) => {

    return (
        <div className={styles.menu}>
            <div className={styles.menu__inner}>

                <span className={styles.menu__cross} onClick={() => clickHendler(false)}/>


                <div className={styles.menu__title}>
                    <span className={styles.menu__title_decor}/>
                    <h1 className={styles.menu__title_text}>
                        <p>First, solve the problem.</p>
                        <p>Then, write the code.</p>
                    </h1>
                </div>

                <nav className={styles.menu__navbar}>
                    <ul className={styles.header__menu_list}>
                        <li className={styles.header__menu_item} onClick={() => clickHendler(false)}>
                            <NavLink to={'/home'}>home</NavLink>
                        </li>
                        <li className={styles.header__menu_item} onClick={() => clickHendler(false)}>
                            <NavLink to={'/portfolio'}>my works</NavLink>
                        </li>
                        <li className={styles.header__menu_item} onClick={() => clickHendler(false)}>
                            <NavLink to={'/about'}>about</NavLink>
                        </li>
                        <li className={styles.header__menu_item} onClick={() => clickHendler(false)}>
                            <NavLink to={'/contacts'}>contacts</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}