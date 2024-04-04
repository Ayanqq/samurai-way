import React from 'react';
import './App.css';
import { Header } from "./Components/header/Header";
import { Sidebar } from "./Components/sidebar/Sidebar";
import { Content } from "./Components/main/Main";
import { Dialogs } from "./Components/dialogs/Dialogs";
import { StyledMain } from "./styles/GlobalStyles";
import { BrowserRouter, Route } from 'react-router-dom';
import { Music } from './Components/music/Music';
import { News } from './Components/news/News';
import { Settings } from './Components/settings/Settings';


function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header />
                <Sidebar />
                <StyledMain>
                    <Route component={Dialogs} path='/dialogs'/>
                    <Route component={Content} path='/profile'/>
                    <Route component={News} path='/news'/>
                    <Route component={Music} path='/music'/>
                    <Route component={Settings} path='/settings'/>
                </StyledMain>
            </div>
        </BrowserRouter>
    )
}

export default App;
