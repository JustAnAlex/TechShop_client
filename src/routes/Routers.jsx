import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../page/login/Login';
import MainPage from '../page/main/MainPage';
import Registration from '../page/registration/Registration';
import About from "../page/About";
import Basket from "../page/Basket";
import AdminPanel from "../page/adminPage/AdminPanel";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Routers = observer(() => {
    const {user} = useContext(Context)

    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />

            {user.isAuth && user.isAdmin && <Route path="admin_panel" element={<AdminPanel/>}/>}

            {user.isAuth ?
                <>
                <Route path="/shop" element={<MainPage/>} />
                <Route path="/device/:id" element={<About/>} />
                <Route path="/basket" element={<Basket/>} />
                <Route path="*" element={<MainPage/>} />
                </>
                :
                <Route path="*" element={<Login/>} />
            }
        </Routes>
    );
})

export default Routers;
