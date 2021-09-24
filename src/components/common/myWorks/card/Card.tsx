import React from "react";
import styles from "./Card.module.scss";



type CardType = {
    name: string
    opt: any
    link: string
}

export const Card: React.FC<CardType> = ({name, opt, link}) => {

    return (
        <div className={styles.card} style={{
            gridColumnStart: opt.cs,
            gridColumnEnd: opt.ce,
            gridRowStart: opt.rs,
            gridRowEnd: opt.re
        }}>
            <div className={styles.card__inner}>

                    <p className={styles.card__title}>
                        {name}
                        <span className={styles.card__decor}/>
                    </p>



                <p className={styles.card__discription}>
                    <a href={link}>
                        View <br/> details.
                    </a>
                </p>

            </div>
        </div>
    )
}