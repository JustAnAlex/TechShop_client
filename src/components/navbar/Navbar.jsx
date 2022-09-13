import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { observer } from 'mobx-react-lite';

import styles from './Navbar.module.scss'
import {Context} from "../../index";

const Navbar = observer(() => {
    const {user} = useContext(Context)
    const toPage = useNavigate()

    const exit = () => {
        localStorage.removeItem('token')
        user.isAuth = false
        user.isAdmin = false
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_left}>
                <Link className={styles.link} to='/shop'>Магазин</Link>
            </div>
            <div className={styles.navbar_right}>
                {user.isAdmin &&
                <div onClick={() => toPage('/admin_panel')} className={styles.img_wrapper}>
                    <img src='logo_64x64.png' alt='logo'/>
                </div>
                }
                <button className={styles.button} onClick={()=>exit()}>Выйти</button>
            </div>
        </div>
    )
})

export default Navbar;

