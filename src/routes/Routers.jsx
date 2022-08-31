import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../page/login/Login';
import MainPage from '../page/main/MainPage';
import Registration from '../page/registration/Registration';
import About from "../page/About";
import Basket from "../page/Basket";
import AdminPanel from "../page/AdminPanel";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import API from "../http/API";

const Routers = observer(() => {
    const {user} = useContext(Context)

    // const toPage = useNavigate()
    //
    // useEffect(() => {
    //     API.checkAuthorization()
    //         .then((data)=>{
    //                 user.data = data
    //                 user.isAuth = true
    //                 // toPage('/shop')
    //             }
    //         )
    //         .catch(e => {
    //             // toPage('/login')
    //         })
    // })


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
