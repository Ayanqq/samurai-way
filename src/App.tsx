import React from 'react';
import './App.css';
import {Header} from "./Components/header/Header";
import {Footer} from "./Components/footer/Footer";
import {Sidebar} from "./Components/sidebar/Sidebar";
import {Content} from "./Components/Main/Main";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Sidebar/>
            <Content/>
            {/*<Footer/>*/}
        </div>
    )
}

export default App;
