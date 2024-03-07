import React from 'react';
import './App.css';
import {Header} from "./Components/header/Header";
import {Footer} from "./Components/footer/Footer";
import {Technologies} from "./Components/Technologies/Technologies";


function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
            <Footer/>
        </div>
    )
}

export default App;
