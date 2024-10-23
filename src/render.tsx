import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostText} from './redux/state'
import {BrowserRouter, HashRouter} from "react-router-dom";

// addPost('Samurai alga KAZAKHSTAN')

export const rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <HashRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </HashRouter>,
        document.getElementById('root')
    );
}