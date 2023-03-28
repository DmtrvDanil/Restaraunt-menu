import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import App from './components/app';

import './index.css';
import {Provider} from "react-redux";
import ErrorBoundry from "./components/error-boundry";
import RestoService from "./services/resto-service";
import {BrowserRouter as Router} from 'react-router-dom';
import RestoServiceContext from './components/resto-service-context/resto-service-context.js'
import store from "./store";


const restoService = new RestoService();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)

root.render(
     <Provider store={store}>
        <ErrorBoundry>
    <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App />
                 </Router>
            </RestoServiceContext.Provider>
            </ErrorBoundry>
    </Provider>
);

