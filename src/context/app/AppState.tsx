import React from "react";
import {AppContext} from "./appContext";

import github from '../../imgs/icons/Github_white.svg'
import telegram from '../../imgs/icons/Telegram.svg'
import google from '../../imgs/icons/google.svg'
import hh from '../../imgs/icons/hh.svg'

import todolist_img from '../../imgs/Card_1.jpg'
import shop_img from '../../imgs/Card_2.jpg'
import tic_tac_toe_img from '../../imgs/Card_3.jpg'
import mba_img from '../../imgs/Card_4.jpg'
import work_test_img from '../../imgs/Card_5.jpg'
import test_city_img from '../../imgs/Card_4.jpg'

export interface AppStateType {
    links: {
        link: string
        icon: string
    }[]
    works: {
        name: string
        sourseLink: string
        deployLink?: string 
        img: string
    }[]
}

export const appInitialState: AppStateType = {
    links: [
        {
            link: 'https://github.com/AlexGert42?tab=repositories',
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
    ],
    works: [
        {
            name: 'MBA',
            sourseLink: 'https://github.com/npomba/moscow.mba.git',
            deployLink: 'https://moscow.mba',
            img: shop_img
        },
        {
            name: 'MITU',
            sourseLink: 'https://github.com/anpmitu/mitu.msk.ru.git',
            deployLink: 'https://mitu-msk-ru-2cu8zjwfv-ipe.vercel.app/',
            img: tic_tac_toe_img
        },
        {
            name: 'Integration AmoCrm',
            sourseLink: 'https://github.com/AlexGert42/amo-api.git',
            // deployLink: 'https://alexgert42.github.io/mba/',
            img: todolist_img
        },
        {
            name: 'Test OnePoint',
            sourseLink: 'https://github.com/AlexGert42/work_test.git',
            deployLink: 'https://alexgert42.github.io/work_test/',
            img: mba_img
        },
        {
            name: 'x-way',
            sourseLink: 'https://github.com/AlexGert42/xWay.git',
            deployLink: 'https://www.x-way.studio/',
            img: work_test_img
        },
    ]
}


export const AppState: React.FC<React.ReactNode> = ({children}) => {


    return (
        <AppContext.Provider
            value={{
                links: appInitialState.links,
                works: appInitialState.works
            }}
        >
            {children}
        </AppContext.Provider>
    )
}