import React, {useContext, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Routers from './routes/Routers';
import {Context} from "./index";
import API from "./http/API";

function App() {
    const {user} = useContext(Context)

    useEffect(() => {
        API.checkAuthorization()
        .then((data)=>{
            user.data = data
            user.isAuth = true
            if (data?.role === 'ADMIN') {
                user.isAdmin = true
            }
        })
        .catch(e => {
            console.log(e)
        })
    })

    return (
        <BrowserRouter>
            <Navbar/>
            <Routers/>
        </BrowserRouter>
    );
}

export default App;