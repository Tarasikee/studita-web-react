import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";

ReactDOM.render(
    <Suspense fallback={<img alt={"Something Wrong!"}
                             src={"./favicon.svg"}/>}>
        <CookiesProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </CookiesProvider>
    </Suspense>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
