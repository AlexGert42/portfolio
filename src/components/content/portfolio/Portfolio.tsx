import React from 'react'
import styles from './Portfolio.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
import F from '../../../imgs/Frame_menu.jpg'

// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import {MyWorks} from "../../common/myWorks/MyWorks";


export const Portfolio: React.FC = () => {



    return (
        <>
            <KingScreen
                frame={F}
                title_1={''}
                title_2={'My Works'}
            />

            <section className={"container"}>
                <div className={styles.portfolio}>
                    <MyWorks/>
                </div>
            </section>
        </>
    )
}
