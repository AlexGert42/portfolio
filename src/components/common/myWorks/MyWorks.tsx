import React from 'react'
import styles from './MyWorks.module.scss';
import {Card} from "./card/Card";

import img_1 from '../../../imgs/Card_1.jpg'
import img_2 from '../../../imgs/Card_2.jpg'
import img_3 from '../../../imgs/Card_3.jpg'
import img_4 from '../../../imgs/Card_4.jpg'
import img_5 from '../../../imgs/Card_5.jpg'

export const MyWorks: React.FC = () => {

    let card_1 = {cs: 1, ce: 5, rs: 1, re: 5}
    let card_2 = {cs: 5, ce: 9, rs: 1, re: 4}
    let card_3 = {cs: 9, ce: 13, rs: 1, re: 5}
    let card_4 = {cs: 1, ce: 5, rs: 5, re: 9}
    let card_5 = {cs: 5, ce: 9, rs: 4, re: 7}
    let card_6 = {cs: 9, ce: 13, rs: 5, re: 9}
    let card_7 = {cs: 5, ce: 9, rs: 7, re: 10}

    return (
        <div className={styles.works}>
            <h2 className={styles.works__title}>my works</h2>
            <div className={styles.works__cards}>
                <Card name={'Todolist'} opt={card_1} link={'#'} img={img_1}/>
                <Card name={'Todolist'} opt={card_2} link={'#'} img={img_2}/>
                <Card name={'Todolist'} opt={card_3} link={'#'} img={img_3}/>
                <Card name={'Todolist'} opt={card_4} link={'#'} img={img_4}/>
                <Card name={'Todolist'} opt={card_5} link={'#'} img={img_5}/>
                <Card name={'Todolist'} opt={card_6} link={'#'} img={img_2}/>
                <Card name={'Todolist'} opt={card_7} link={'#'} img={img_2}/>
            </div>
        </div>
    )
}