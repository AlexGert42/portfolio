import React from 'react'
import styles from './About.module.scss'
import {KingScreen} from "../kingScreen/KingScreen";


export const About = () => {

    return (
        <>
            <KingScreen
                title_1={''}
                title_2={'About'}
            />
            <div className={"container"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dicta, vel! Aut autem cupiditate
                expedita, quas quibusdam quisquam sunt unde? Aperiam distinctio doloremque impedit in iusto laboriosam
                quaerat soluta, ut.a
            </div>
        </>
    )
}