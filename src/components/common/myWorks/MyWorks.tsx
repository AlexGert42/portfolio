import React, {useContext} from 'react'
import styles from './MyWorks.module.scss';
import {Card} from "./card/Card";
import {AppStateType} from "../../../context/app/AppState";
import {AppContext} from "../../../context/app/appContext";

export const MyWorks: React.FC = () => {

    const {works} = useContext<AppStateType>(AppContext)

    const cardPosition = [
        {cs: 1, ce: 5, rs: 1, re: 5},
        {cs: 5, ce: 9, rs: 1, re: 4},
        {cs: 9, ce: 13, rs: 1, re: 5},
        {cs: 1, ce: 5, rs: 5, re: 9},
        {cs: 5, ce: 9, rs: 4, re: 7},
        {cs: 9, ce: 13, rs: 5, re: 9},
        {cs: 5, ce: 9, rs: 7, re: 10}
    ]

    return (
        <div className={styles.works}>
            <h2 className={styles.works__title}>my works</h2>
            <div className={styles.works__cards}>
                {
                    works.map((item, i) => {
                        return (
                            <Card
                                key={item.sourseLink}
                                name={item.name}
                                opt={cardPosition[i]}
                                linkSourse={item.sourseLink}
                                linkDeploy={item.deployLink}
                                img={item.img}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}