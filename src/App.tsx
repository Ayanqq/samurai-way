import React from 'react';
import './App.css';
import {Header} from "./Components/header/Header";
import {Sidebar} from "./Components/sidebar/Sidebar";
import {Main} from "./Components/main/Main";
import {Dialogs} from "./Components/dialogs/Dialogs";
import {StyledMain} from "./styles/GlobalStyles";
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './Components/music/Music';
import {News} from './Components/news/News';
import {Settings} from './Components/settings/Settings';
import {RootStateType} from "./redux/state";


type AppType =  {
    state: RootStateType
}
function App({state}:AppType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header />
                <Sidebar friends={state.sidebarPage.friends}/>
                <StyledMain>
                    {/*<Route component={Dialogs } path='/dialogs'/>*/}
                    <Route component={News} path='/news'/>
                    <Route component={Music} path='/music'/>
                    <Route component={Settings} path='/settings'/>

                    <Route render={()=> <Main profilePage={state.profilePage}/>} path='/profile'/>
                    <Route render={()=> <Dialogs  messagesPage={state.messagesPage} /> } path='/dialogs'/>
                </StyledMain>
            </div>
        </BrowserRouter>
    )
}

export default App;
