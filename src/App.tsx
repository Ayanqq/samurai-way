import React from 'react';
import './App.css';
import {Header} from "./Components/header/Header";
import {Sidebar} from "./Components/sidebar/Sidebar";
import {Main} from "./Components/main/Main";
import {Dialogs} from "./Components/dialogs/Dialogs";
import {StyledMain} from "./styles/GlobalStyles";
import {HashRouter, Route} from 'react-router-dom';
import {Music} from './Components/music/Music';
import {News} from './Components/news/News';
import {Settings} from './Components/settings/Settings';
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType,
    addPost: (postTitle: string) => void
    updateNewPostText: (postTitle: string) => void
}

function App({
                 state,
                 addPost,
                 updateNewPostText
             }: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Sidebar sidebarPage={state.sidebarPage}/>
            <StyledMain>
                {/*<Route component={Dialogs } path='/dialogs'/>*/}

                <Route component={News} path='/news'/>
                <Route component={Music} path='/music'/>
                <Route component={Settings} path='/settings'/>

                <Route render={() => <Main profilePage={state.profilePage}
                                           addPost={addPost}
                                           updateNewPostText={updateNewPostText}/>}
                       path='/profile'/>
                <Route render={() => <Dialogs messagesPage={state.messagesPage}/>} path='/dialogs'/>

            </StyledMain>
        </div>
    )
}

export default App;
