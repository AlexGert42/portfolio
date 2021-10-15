import React, {useContext, useState,} from 'react'
import styles from './Contacts.module.scss'
import {KingScreen} from "../../common/kingScreen/KingScreen";
import F from '../../../imgs/Frame_contact.jpg'
import {Button} from "../../common/button/Button";
import {Field, FieldArea} from '../../common/field/Field';
import {Loader, ModalWindow} from '../../common/modal/ModalWindow';
import {FormContext} from "../../../context/form/formContext";
import {maxLengthCreator, requiredField, validateEmail, validators} from "../../common/validators/Validators";


export const Contacts: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [text, setText] = useState<string>('')

    const [error_1, setError_1] = useState<string>('')
    const [error_2, setError_2] = useState<string>('')
    const [error_3, setError_3] = useState<string>('')

    const {sendMessag, hideModal, form} = useContext<any>(FormContext)

    const submitHendler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setError_1(requiredField(name) || maxLengthCreator(name, 50))
        setError_2(requiredField(email) || validateEmail(email))
        setError_3(requiredField(text) || maxLengthCreator(text, 500))
        if (validators({name, email, text})) {
            sendMessag({name, email, text})
        }
    }


    return (

        <>
            {
                form.loading && <Loader/>
            }
            {
                form.showModal && <ModalWindow hide={hideModal}/>
            }

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








