import React from "react";
import {AppContext} from "./appContext";

import github from '../../imgs/icons/Github_white.svg'
import telegram from '../../imgs/icons/Telegram.svg'
import google from '../../imgs/icons/google.svg'
import hh from '../../imgs/icons/hh.svg'

export interface AppStateType {
    links: {
        link: string
        icon: string
    }[]
}

export const appInitialState: AppStateType = {
    links: [
        {
            link: 'https://github.com/AlexGert42',
            icon: github
        },
        {
            link: 'https://t.me/alexTreg12',
            icon: telegram
        },
        {
            link: 'https://hh.ru/applicant/resumes/view?resume=bbe1750aff0835c2050039ed1f6c5752424356',
            icon: hh
        },
        {
            link: 'mailto:alex.gert1812@gmail.com',
            icon: google
        }
    ]
}


export const AppState: React.FC<React.ReactNode> = ({children}) => {


    return (
        <AppContext.Provider
            value={{
                links: appInitialState.links
            }}
        >
            {children}
        </AppContext.Provider>
    )
}