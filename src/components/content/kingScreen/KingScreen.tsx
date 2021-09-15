import React from 'react'
import styles from './KingScreen.module.scss'


export const KingScreen = () => {


    return (
        <div className={styles.screen}>
            <div className={"container"}>
                <div className={styles.screen__inner}>
                    <h1 className={styles.screen__title} >
                        <span className={styles.title__one}>Hello,</span>
                        <span className={styles.title__two}>I'M Alex Gert</span>
                        <span className={styles.title__thre}>Front-End Developer</span>
                    </h1>
                    <span className={styles.screen__decor}/>
                    <div className={styles.screen__social}>1, 2, 3</div>
                </div>
            </div>
        </div>
    )
}