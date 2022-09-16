import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import styles from './index.module.scss'

import TypeReducer from "./store/typeReducer";
import DeviceReducer from "./store/deviceReducer";
import UserReducer from "./store/userReducer";

interface IContext {
    device: typeof DeviceReducer,
    type: typeof TypeReducer,
    user: typeof UserReducer
}
const context = {
    device: DeviceReducer,
    type: TypeReducer,
    user: UserReducer
}
export const Context = createContext<IContext>(context)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Context.Provider value={context}>
        <div className={styles.app}>
            <App />
        </div>
    </Context.Provider>
)
