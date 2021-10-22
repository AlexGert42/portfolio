import React from 'react';
import {Header} from "./components/header/Header";
import {Content} from "./components/content/Content";
import {Footer} from "./components/footer/Footer";
import {FormState} from './context/form/FormState';
import {AppState} from './context/app/AppState';

export const App: React.FC = () => {
    return (
        <AppState>
            <FormState>
                <div className={"wrapper"}>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </FormState>
        </AppState>
    )
}



