import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Home} from './home/Home'
import {About} from "./about/About";
import {Contacts} from "./contacts/Contacts";
import {Portfolio} from './portfolio/Portfolio';


const mainStyles = {
    minHeight: 'calc(100vh - 100px)'
}

export const Content: React.FC = () => {

    return (
        <main style={mainStyles}>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={'/home'}/>}/>
                <Route path={'/home'} component={Home}/>
                <Route path={'/works'} component={Portfolio}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/contacts'} component={Contacts}/>
            </Switch>
        </main>
    )
}