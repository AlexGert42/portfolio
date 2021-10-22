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
        deployLink: string
        img: string
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
    ],
    works: [
        {
            name: 'Todolist',
            sourseLink: 'https://github.com/AlexGert42/todoDz.git',
            deployLink: 'https://alexgert42.github.io/todoDz/',
            img: todolist_img
        },
        {
            name: 'Cart Aplication',
            sourseLink: 'https://github.com/AlexGert42/shop.git',
            deployLink: '',
            img: shop_img
        },
        {
            name: 'Tic Tac Toe',
            sourseLink: '',
            deployLink: 'sas',
            img: tic_tac_toe_img
        },
        {
            name: 'MBA Test',
            sourseLink: 'https://github.com/AlexGert42/mba.git',
            deployLink: 'https://alexgert42.github.io/mba/',
            img: mba_img
        },
        {
            name: 'Test City',
            sourseLink: 'https://github.com/AlexGert42/work_test.git',
            deployLink: 'https://github.com/AlexGert42/test_city.git',
            img: test_city_img
        },
        // {
        //     name: 'Test City',
        //     sourseLink: 'https://github.com/AlexGert42/work_test.git',
        //     deployLink: 'https://github.com/AlexGert42/test_city.git',
        //     img: test_city_img
        // },
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