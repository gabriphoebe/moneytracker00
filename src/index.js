import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import styles from './styles.css';
import App from "./App";
import store from './store';
import { Provider } from 'react-redux';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
            <Provider store={store}>
                <StrictMode>
                    <App />
                </StrictMode>
            </Provider>
            
            );
