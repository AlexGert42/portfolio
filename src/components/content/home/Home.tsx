import React from 'react'
import styles from './Home.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {MyWorks} from "../../common/myWorks/MyWorks";

import icon_1 from '../../../imgs/icons/icon.svg'


export const Home = () => {


    return (
        <div className={styles.home}>
            <KingScreen heightFrame={'760px'}/>

            <div className={styles.home__skils}>
                <section className={"container"}>
                    <h2 className={styles.home__skils_title}>MY SKILS</h2>
                    <div className={styles.skils}>

                        <div className={styles.skils__item}>
                            <img src={icon_1} alt=""/>
                            <h3>JS</h3>
                            {/*<p>*/}
                            {/*    Lorem aborum modi neque praesentium repudiandae tenetur? Culpa cum eos est molestiae*/}
                            {/*    mollitia odio qui repellat tempora!*/}
                            {/*</p>*/}
                        </div>

                        <div className={styles.skils__item}>
                            <img src={icon_1} alt=""/>
                            <h3>HTML/CSS</h3>
                            {/*<p>*/}
                            {/*    Lorem ipsum dolor sit ntium repudiandae tenetur? Culpa cum eos est molestiae mollitia*/}
                            {/*    odio qui repellat tempora!*/}
                            {/*</p>*/}
                        </div>

                        <div className={styles.skils__item}>
                            <img src={icon_1} alt=""/>
                            <h3>REACT</h3>
                            {/*<p>*/}
                            {/*    Lorem tium repudiandae tenetur? Culpa cum eos est molestiae mollitia odio qui*/}
                            {/*    repellat*/}
                            {/*    tempora!*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </section>
            </div>

            <section className={"container"}>
                <Fade buttom>
                    <MyWorks/>
                </Fade>
            </section>
        </div>
    )
}