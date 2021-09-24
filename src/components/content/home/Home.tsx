import React from 'react'
import styles from './Home.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {MyWorks} from "../../common/myWorks/MyWorks";


export const Home = () => {

    return (
        <div>
            {/*<div id={'start'}/>*/}
            <KingScreen/>

            <section  className={"container"}>
                <div className={styles.home}>
                    <div className={styles.home__skils}>

                        <Fade>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci
                                aperiam autem delectus dicta dolor excepturi id ipsa iure laborum minima modi nesciunt,
                                omnis, quidem saepe ullam voluptatibus.
                            </p>
                        </Fade>
                        <Fade>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci
                                aperiam autem delectus dicta dolor excepturi id ipsa iure laborum minima modi nesciunt,
                                omnis, quidem saepe ullam voluptatibus.
                            </p>
                        </Fade>
                        <Fade>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci
                                aperiam autem delectus dicta dolor excepturi id ipsa iure laborum minima modi nesciunt,
                                omnis, quidem saepe ullam voluptatibus.
                            </p>
                        </Fade>
                        <Fade>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci
                                aperiam autem delectus dicta dolor excepturi id ipsa iure laborum minima modi nesciunt,
                                omnis, quidem saepe ullam voluptatibus.
                            </p>
                        </Fade>
                        <Fade>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci
                                aperiam autem delectus dicta dolor excepturi id ipsa iure laborum minima modi nesciunt,
                                omnis, quidem saepe ullam voluptatibus.
                            </p>
                        </Fade>
                        <Fade>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci
                                aperiam autem delectus dicta dolor excepturi id ipsa iure laborum minima modi nesciunt,
                                omnis, quidem saepe ullam voluptatibus.
                            </p>
                        </Fade>
                        <Fade>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci
                                aperiam autem delectus dicta dolor excepturi id ipsa iure laborum minima modi nesciunt,
                                omnis, quidem saepe ullam voluptatibus.
                            </p>
                        </Fade>
                        <Fade>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci
                                aperiam autem delectus dicta dolor excepturi id ipsa iure laborum minima modi nesciunt,
                                omnis, quidem saepe ullam voluptatibus.
                            </p>
                        </Fade>
                        <Fade>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci
                                aperiam autem delectus dicta dolor excepturi id ipsa iure laborum minima modi nesciunt,
                                omnis, quidem saepe ullam voluptatibus.
                            </p>
                        </Fade> <Fade>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci
                            aperiam autem delectus dicta dolor excepturi id ipsa iure laborum minima modi nesciunt,
                            omnis, quidem saepe ullam voluptatibus.
                        </p>
                    </Fade>

                    </div>
                    <Fade>
                        <MyWorks/>
                    </Fade>
                </div>
            </section>
        </div>
    )
}