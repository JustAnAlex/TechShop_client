import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import {observer} from "mobx-react-lite";

import Login from '../page/authorization/Login';
import MainPage from '../page/main/MainPage';
import Registration from '../page/authorization/Registration';
import About from "../page/About";
import Basket from "../page/Basket";
import AdminPanel from "../page/adminPage/AdminPanel";
import {Context} from "../index";

const Routers = observer(() => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && user.isAdmin && <Route path="admin" element={<AdminPanel/>}/>}
            {user.isAuth ?
                <>
                    <Route path="/shop" element={<MainPage/>} />
                    <Route path="/device/:id" element={<About/>} />
                    <Route path="/basket" element={<Basket/>} />
                    <Route path="*" element={<MainPage/>} />
                </>
                :
                <>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/registration" element={<Registration/>} />
                    <Route path="*" element={<Login/>} />
                </>
            }
        </Routes>
    );
})

export default Routers;
