import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";

import styles from './Navbar.module.scss'
import {Context} from "../../index";

const Navbar = () => {
    
    const {user} = useContext(Context)
    const toPage = useNavigate()

    const exit = () => {
        localStorage.removeItem('token')
        console.log(localStorage.getItem('token'))
        user.isAuth = false
    }

    const Admin_panel = () => { return(
        <div onClick={() => toPage('/admin_panel')} className={styles.img_wrapper}>
            <img src='logo_64x64.png' alt='logo'/>
        </div>
    )}

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_left}>
                <Link className={styles.link} to='/shop'>Магазин</Link>
            </div>
            <div className={styles.navbar_right}>
                {user.isAdmin && Admin_panel()}
                {/* <div onClick={() => toPage('/admin_panel')} className={styles.img_wrapper}>
                    <img src='logo_64x64.png' alt='logo'/>
                </div> */}
                <button className={styles.button} onClick={()=>exit()}>Выйти</button>
            </div>
        </div>
    )

}

export default Navbar;

