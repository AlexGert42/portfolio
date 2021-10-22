import React from 'react'
import styles from './About.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
import F from '../../../imgs/frame_about.jpg'
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
                                    development and have been working as a freelancer starting from 2020 year.
                                </p>
                            </Fade>
                            <Fade buttom>
                                <p>
                                    My hard skills: React, TypeScript, Webpack, HTML, SCSS, Python, Django, SQL.
                                    Ui libraries: Material ui, Ant design. Deep knowledge of Figma and Photoshop. You
                                    may find some of my projects in this
                                    portfolio.
                                </p>
                            </Fade>
                            <Fade buttom>
                                <p>
                                    I’m highly motivated, like to resolve coding
                                    problems, to craft solid and scalable frontend products with great user experiences,
                                    always pushing my own boundaries and allowing myself to think out of the box.
                                </p>
                            </Fade>
                        </div>

                        <div className={styles.about__text_block}>
                            <Fade buttom>
                                <p>

                                </p>
                            </Fade>
                            <Fade buttom>
                                <p>
                                    expedita, quas quibusdam quisquam sunt unde? Aperiam distinctio doloremque impedit
                                    in iusto
                                    laboriosam
                                    quaerat soluta, ut.a
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dicta, vel! Aut
                                    autem
                                    cupiditate
                                    expedita, quas
                                </p>
                            </Fade>
                            <Fade buttom>
                                <p>
                                    expedita, quas quibusdam quisquam sunt unde? Aperiam distinctio doloremque impedit
                                    in iusto
                                    laboriosam
                                    quaerat soluta, ut.a
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dicta, vel! Aut
                                    autem
                                    cupiditate
                                </p>
                            </Fade>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}