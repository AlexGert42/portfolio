import React from 'react'
import styles from './About.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
import F from '../../../imgs/Frame_about.jpg';
import {Chart} from "../../common/chart/Chart";
// @ts-ignore
import Fade from 'react-reveal/Fade';

export const About = () => {

    return (
        <>
            <KingScreen
                frame={F}
                title_1={''}
                title_2={'About'}
                heightFrame={'570px'}
            />
            <section className={"container"}>
                <div className={styles.about}>

                    <div className={styles.about__charts}>
                        <Fade bottom><Chart title={'Programming'} value={90}/></Fade>
                        <Fade bottom><Chart title={'Graphics'} value={85}/></Fade>
                        <Fade bottom><Chart title={'Design'} value={77}/></Fade>
                        <Fade bottom><Chart title={'Debugging'} value={80}/></Fade>
                    </div>

                    <div className={styles.about__text}>
                        <div className={styles.about__text_block}>
                            <Fade buttom>
                                <p>
                                    <span>Hi, guys! </span>
                                    My name is Alex Gert, I develop interfaces, responsive apps for desktop, Android,
                                    single-page applications with pixel-perfect code. I have high skills in algorithms,
                                    data structures, databases/server management etc. Mostly I specialize in front-end
                                    development and have been working as a freelancer since 2020 year.
                                </p>
                            </Fade>
                            <Fade buttom>
                                <p>
                                    My hard skills: React, TypeScript, Webpack, HTML, SCSS, Python, Django, SQL.
                                    Ui libraries: Material ui, Ant design. Deep knowledge of Figma and Photoshop. I also
                                    can do different types of code testing and prefer to code longer but with better
                                    quality. You may find some of my projects in this portfolio.
                                </p>
                            </Fade>
                        </div>

                        <div className={styles.about__text_block}>
                            <Fade buttom>
                                <br/>
                                <p>
                                    I’m highly motivated, like to resolve coding
                                    problems, to craft solid and scalable frontend products with great user experiences,
                                    always pushing my own boundaries and allowing myself to think out of the box.
                                </p>
                            </Fade>
                            <Fade buttom>

                                <p>
                                    And of course I love my dog as you already guessed because of the photo above, his
                                    name is Balu and he helps me with my work and other passions: travelling, hiking,
                                    sport. As a professional sportsman in the past I prefer active lifestyle but on the
                                    other hand I also like staying at home and spend time with Balu.
                                </p>
                            </Fade>
                            <Fade buttom>

                            </Fade>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}