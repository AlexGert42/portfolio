import React, {useState} from 'react'
import styles from './Contacts.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
import F from '../../../imgs/Frame_contact.jpg'
import {Button} from "../../common/button/Button";
import { Field } from '../../common/Field/Field';


export const Contacts: React.FC = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')





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
                        <Field
                            placeholder={'Name & Surname'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            validators={[
                                maxLengthCreator
                            ]}
                        />
                        <Field
                            placeholder={'E-mail Address'}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            validators={[
                                validateEmail,
                                maxLengthCreator
                            ]}
                        />
                    </div>
                    <div className={styles.contacts__arial}>
                        <textarea placeholder={'Message'}/>
                    </div>
                    <Button>Send</Button>
                </form>
            </section>
        </>
    )
}








const requiredField = (value: string) => {
    if (value.trim()) {
        return ''
    } else {
        return 'Field is required'
    }
}

const maxLengthCreator = (value: string, maxLength: number = 20) => {
    if (value.length <= maxLength) {
        return ''
    } else {
        return `Max length is ${maxLength} sumbols`
    }
}

const validateEmail = (value: string) => {
    const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (reg.test(String(value).toLowerCase())) {
        return ''
    } else {
        return 'Incorrect Email'
    }
}



