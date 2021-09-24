import React from 'react'
import styles from './Home.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {MyWorks} from "../../common/myWorks/MyWorks";

import icon_1 from '../../../imgs/icons/icon.svg'

import img_1 from '../../../imgs/circle/Group 1.svg'
import img_2 from '../../../imgs/circle/Group 2.svg'
import img_3 from '../../../imgs/circle/Group 3.svg'
import img_4 from '../../../imgs/circle/Group 4.svg'
import img_5 from '../../../imgs/circle/Group 5.svg'

// @ts-ignore
import Tilt from 'react-tilt'


export const Home = () => {

    return (
        <>
            <KingScreen/>

            <div className={styles.home__skils}>
                <section className={"container"}>
                    <h2 className={styles.home__skils_title}>MY SKILS</h2>
                    <div className={styles.skils}>

                        <div className={styles.skils__item}>
                            <img src={icon_1} alt=""/>
                            <h3>JS</h3>
                            <p>Lorem aborum modi neque praesentium repudiandae tenetur? Culpa cum eos est molestiae
                                mollitia odio qui repellat tempora!</p>
                        </div>

                        <div className={styles.skils__item}>
                            <img src={icon_1} alt=""/>
                            <h3>HTML/CSS</h3>
                            <p>Lorem ipsum dolor sit ntium repudiandae tenetur? Culpa cum eos est molestiae mollitia
                                odio qui repellat tempora!</p>
                        </div>

                        <div className={styles.skils__item}>
                            <img src={icon_1} alt=""/>
                            <h3>REACT</h3>
                            <p>Lorem tium repudiandae tenetur? Culpa cum eos est molestiae mollitia odio qui repellat
                                tempora!</p>
                        </div>

                    </div>
                </section>
            </div>

            <section className={"container"}>
                <Fade buttom>
                    <MyWorks/>
                </Fade>
            </section>

            <section className={"container"}>
                <div className={styles.circle}>



                    <Tilt className={styles.circle__item} style={{top: '0', left: '35%'}} options={{max: 35, scale: 1.3}}>
                        <img src={img_1} alt=""/>
                    </Tilt>
                    <Tilt className={styles.circle__item} style={{top: '5%', left: '55%'}} options={{max: 35, scale: 1.3}}>
                        <img src={img_2} alt=""/>
                    </Tilt>
                    <Tilt className={styles.circle__item} style={{bottom: '155px', right: '25px'}} options={{max: 35, scale: 1.3}}>
                        <img src={img_3} alt=""/>
                    </Tilt>
                    <Tilt className={styles.circle__item} style={{top: '5%', left: '100px'}} options={{max: 35, scale: 1.3}}>
                        <img src={img_4} alt=""/>
                    </Tilt>
                    <Tilt className={styles.circle__item} style={{bottom: '145px', left: '125px'}} options={{max: 35, scale: 1.3}}>
                        <img src={img_5} alt=""/>
                    </Tilt>
                </div>
            </section>
        </>
    )
}