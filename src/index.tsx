import { render } from "react-dom";
import createServer from "./server.js";
import App from "./App";
import { Provider } from 'react-redux';
import { Store } from './store';

const NUMBER_OF_POSTS = 100;
const PAGE_SIZE = 20;

createServer(NUMBER_OF_POSTS, PAGE_SIZE);

const rootElement = document.getElementById("root");
render(
    <Provider store={Store}>
        <App />
    </Provider>, 
rootElement);
