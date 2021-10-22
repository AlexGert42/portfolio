import React from "react";
import styles from "./Card.module.scss";
// @ts-ignore
import Tilt from 'react-tilt'

type CardType = {
    name: string
    linkSourse?: string
    linkDeploy?: string
    img: string
    opt: any
}

export const Card: React.FC<CardType> = ({name, opt, linkSourse, linkDeploy, img}) => {
    return (
        <Tilt
            className={styles.card}
            options={{max: 15, scale: 1, speed: 1000}}
            style={{
                gridColumnStart: opt.cs,
                gridColumnEnd: opt.ce,
                gridRowStart: opt.rs,
                gridRowEnd: opt.re,
                backgroundImage: `url(${img})`
            }}>

            <div className={styles.card__inner}>
                <p className={styles.card__title}>
                    {name}
                    <span className={styles.card__decor}/>
                </p>
                <p className={styles.card__discription}>
                    {
                        linkDeploy && <a href={linkDeploy}>
                            View Deploy
                        </a>
                    }
                    {
                        linkSourse && <a href={linkSourse}>
                            View Sourse
                        </a>
                    }
                </p>
            </div>
        </Tilt>
    )
}