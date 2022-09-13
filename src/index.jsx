import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import styles from './index.module.scss'

import TypeReducer from "./store/typeReducer";
import DeviceReducer from "./store/deviceReducer";
import UserReducer from "./store/userReducer";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Context.Provider value={{
        device: DeviceReducer,
        type: TypeReducer,
        user: UserReducer
    }}>
        <div className={styles.app}>
            <App />
        </div>
    </Context.Provider>
)
