import React, {useEffect, useState} from 'react'
import styles from './Contacts.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
import F from '../../../imgs/Frame_contact.jpg'
import {Button} from "../../common/button/Button";
import {Field, FieldArea} from '../../common/field/Field';
import {maxLengthCreator, requiredField, validateEmail} from '../../common/validators/Validators';
import axios from "axios";


export const Contacts: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [error_1, setError_1] = useState<string>('')
    const [error_2, setError_2] = useState<string>('')
    const [error_3, setError_3] = useState<string>('')


    const [valid_1, valid_2, valid_3] = [requiredField, maxLengthCreator, validateEmail]


    const submitHendler = (e: React.SyntheticEvent) => {
        e.preventDefault()

        setError_1(valid_1(name) || valid_2(name))
        setError_2(valid_1(email) || valid_2(email) || valid_3(email))
        setError_3(valid_1(text) || valid_2(text, 250))

        if (!error_1 && !error_2 && !error_3) {


            axios.post('https://portfolio-nodejs-42.herokuapp.com/message', {
                name,
                email,
                text
            })
                .then(res => {
                    console.log(res)
                })

        }

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
                            className={styles.contacts__inputs_item}
                            placeholder={'Name & Surname'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            error={error_1}
                        />
                        <Field
                            className={styles.contacts__inputs_item}
                            placeholder={'E-mail Address'}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            error={error_2}
                        />
                    </div>

                    <div className={styles.contacts__arial}>
                        <FieldArea
                            className={styles.contacts__arial_item}
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder={'Message'}
                            error={error_3}
                        />
                    </div>

                    <Button>Send</Button>
                </form>
            </section>
        </>
    )
}










