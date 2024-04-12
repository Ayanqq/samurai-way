import React from 'react';
import './App.css';
import {Header} from "./Components/header/Header";
import {Sidebar} from "./Components/sidebar/Sidebar";
import {Content} from "./Components/Main/Main";
import {Dialogs} from "./Components/dialogs/Dialogs";
import {StyledMain} from "./styles/GlobalStyles";
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './Components/music/Music';
import {News} from './Components/news/News';
import {Settings} from './Components/settings/Settings';
import {StateType} from "./redux/state";


function App({state}:StateType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header />
                <Sidebar sidebar={state.sidebar}/>
                <StyledMain>
                    {/*<Route component={Dialogs } path='/dialogs'/>*/}
                    <Route component={News} path='/news'/>
                    <Route component={Music} path='/music'/>
                    <Route component={Settings} path='/settings'/>

                    <Route render={()=> <Content profilePage={state.profilePage}/>} path='/profile'/>
                    <Route render={()=> <Dialogs messagesPage={state.messagesPage} /> } path='/dialogs'/>
                </StyledMain>
            </div>
        </BrowserRouter>
    )
}

export default App;
