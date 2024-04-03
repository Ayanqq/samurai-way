import React from 'react';
import './App.css';
import {Header} from "./Components/header/Header";
import {Sidebar} from "./Components/sidebar/Sidebar";
import {Content} from "./Components/main/Main";
import {Dialogs} from "./Components/dialogs/Dialogs";
import {StyledMain} from "./styles/GlobalStyles";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Sidebar/>
            <StyledMain>
                {/*<Content/>*/}
                <Dialogs/>
            </StyledMain>

        </div>
    )
}

export default App;
