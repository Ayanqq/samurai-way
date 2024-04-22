import './index.css';
import {state} from './redux/state'
import {rerenderEntireTree} from "./render";

// addPost('Samurai alga KAZAKHSTAN')

rerenderEntireTree(state)