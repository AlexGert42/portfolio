import React from 'react'
import styles from './About.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
import F from '../../../imgs/Frame_about.jpg'
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
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dicta, vel! Aut
                                    autem
                                    cupiditate
                                    expedita, quas quibusdam quisquam sunt unde? Aperiam distinctio doloremque impedit
                                    in iusto
                                    laboriosam
                                    quaerat soluta, ut.a
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dicta, vel! Aut
                                    autem
                                    cupiditate
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

                        <div className={styles.about__text_block}>
                            <Fade buttom>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dicta, vel! Aut
                                    autem
                                    cupiditate
                                    expedita, quas quibusdam quisquam sunt unde? Aperiam distinctio doloremque impedit
                                    in iusto
                                    laboriosam
                                    quaerat soluta, ut.a
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dicta, vel! Aut
                                    autem
                                    cupiditate
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