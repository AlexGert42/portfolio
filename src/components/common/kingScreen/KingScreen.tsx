import React, {useContext} from 'react'
import styles from './KingScreen.module.scss'
import F from '../../../imgs/i.jpg'

import github from '../../../imgs/icons/Github_white.svg'
import telegram from '../../../imgs/icons/Telegram.svg'
import google from '../../../imgs/icons/google.svg'
import hh from '../../../imgs/icons/hh.svg'


import {AppContext} from "../../../context/app/appContext";
import {AppStateType} from "../../../context/app/AppState";


type KingScreenType = {
    frame?: string
    heightFrame?: string
    title_1?: string
    title_2?: string
    title_3?: string
}


export const KingScreen: React.FC<KingScreenType> = ({
                                                         frame = F,
                                                         heightFrame = '480px',
                                                         title_1 = 'Hello,',
                                                         title_2 = "I'M Alex Gert",
                                                         title_3 = 'Front-End Developer'
                                                     }) => {
    const {links} = useContext<AppStateType>(AppContext)


    return (
        <div id={'start'} className={styles.screen} style={{backgroundImage: `url(${frame})`}}>
            <div className={"container"}>
                <div className={styles.screen__inner} style={{height: heightFrame}}>
                    <h1 className={styles.screen__title}>
                        <span className={styles.title__one}>{title_1}</span>
                        <span className={styles.title__two}>{title_2}</span>
                        <span className={styles.title__thre}>{title_3}</span>
                    </h1>
                    <span className={styles.screen__decor}/>
                    <div className={styles.screen__social}>
                        {links.map(item => {
                            return (
                                <span className={styles.screen__social_item}>
                                    <a href={item.link}>
                                        <img src={item.icon} alt="GH"/>
                                    </a>
                                    <span className={styles.screen__social_decor}/>
                                </span>
                            )
                        })}
                        {/*<a href={'#'}>*/}
                        {/*    <img src={github} alt="GH"/>*/}
                        {/*</a>*/}
                        {/*<span className={styles.screen__social_decor}/>*/}
                        {/*<a href="#">*/}
                        {/*    <img src={telegram} alt="TL"/>*/}
                        {/*</a>*/}
                        {/*<span className={styles.screen__social_decor}/>*/}
                        {/*<a href="#">*/}
                        {/*    <img src={hh} alt="HH"/>*/}
                        {/*</a>*/}
                        {/*<span className={styles.screen__social_decor}/>*/}
                        {/*<a href="#">*/}
                        {/*    <img src={google} alt="GG"/>*/}
                        {/*</a>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}