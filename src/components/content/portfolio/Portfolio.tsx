import React from 'react'
import styles from './Portfolio.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
import F from '../../../imgs/Frame_menu.jpg'
import {Card} from './card/Card';

// @ts-ignore
import Zoom from 'react-reveal/Zoom';


export const Portfolio: React.FC = () => {

    let card_1 = {cs: 1, ce: 5, rs: 1, re: 5}
    let card_2 = {cs: 5, ce: 9, rs: 1, re: 4}
    let card_3 = {cs: 9, ce: 13, rs: 1, re: 5}
    let card_4 = {cs: 1, ce: 5, rs: 5, re: 9}
    let card_5 = {cs: 5, ce: 9, rs: 4, re: 7}
    let card_6 = {cs: 9, ce: 13, rs: 5, re: 9}
    let card_7 = {cs: 5, ce: 9, rs: 7, re: 10}


    return (
        <>
            <KingScreen
                frame={F}
                title_1={''}
                title_2={'My Works'}
            />

            <section className={"container"}>
                <div className={styles.works}>
                    <h2 className={styles.works__title}>my works</h2>


                    <div className={styles.works__cards}>
                        <Card name={'Todolist'} opt={card_1} link={'#'}/>
                        <Card name={'Todolist'} opt={card_2} link={'#'}/>
                        <Card name={'Todolist'} opt={card_3} link={'#'}/>
                        <Card name={'Todolist'} opt={card_4} link={'#'}/>
                        <Card name={'Todolist'} opt={card_5} link={'#'}/>
                        <Card name={'Todolist'} opt={card_6} link={'#'}/>
                        <Card name={'Todolist'} opt={card_7} link={'#'}/>
                    </div>
                </div>
            </section>
        </>
    )
}