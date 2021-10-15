import React, {useEffect} from 'react';
import {Header} from "./components/header/Header";
import {Content} from "./components/content/Content";
import {Footer} from "./components/footer/Footer";
import { FormState } from './context/form/FormState';

export const App: React.FC = () => {

    useEffect(() => {


    },[])


    return (
        <FormState>
        <div className={"wrapper"}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
        </FormState>
    )
}



