import React from 'react'
import styles from './Contacts.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
import F from '../../../imgs/Frame_contact.jpg'
import {Button} from "../../common/button/Button";


export const Contacts: React.FC = () => {

    const clickHender = () => {
        console.log('+++')
    }

    const submitHendler = (e: any) => {
        e.preventDefault()
    }


    return (
        <>
            <KingScreen
                frame={F}
                title_1={''}
                title_2={'Contacts'}
                title_3={'Let’s  have a chat.'}
            />
            <section className={"container"}>
                <form className={styles.contacts} onSubmit={submitHendler}>
                    <div className={styles.contacts__inputs}>
                        <input type="text" placeholder={'Name & Surname'}/>
                        <input type="text" placeholder={'E-mail Address'}/>
                    </div>
                    <div className={styles.contacts__arial}>
                        <textarea placeholder={'Message'}/>
                    </div>
                    <Button clickHender={clickHender}>Send</Button>
                </form>
            </section>
        </>
    )
}