import React, {useContext, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";

import styles from "./Login.module.scss";
import API from "../../http/API";
import {Context} from "../../index";

const Login = () => {
    const {user} = useContext(Context)
    const toPage = useNavigate()

    const formData = {
        email: useRef(),
        password: useRef()
    }
    const sendData = async (e) => {
        e.preventDefault()
        const data = {
            email: formData.email.current.value,
            password: formData.password.current.value
        }
        API.login(data)
        .then((data)=>{
            user.data = data
            user.isAuth = true
            if (data?.role === 'ADMIN') {
                user.isAdmin = true
            }
            toPage('/shop')
        })
        .catch(({message, response} )=> console.log(message, response?.data?.message))
    }

    return (
        <form className={styles.grid_container}>
            <div className={styles.root}>
                <div className={styles.description}>Авторизация</div>
                
                <label>Email address</label>
                <input
                    className={styles.usernameFill}
                    ref={formData.email}
                    placeholder="example@mail.tu"
                    type='email'
                />

                <label>Password</label>
                <input
                    className={styles.passwordFill}
                    ref={formData.password}
                    type='password'
                />

                <div className={styles.footer}>
                    <div>
                        <span>Нет аккаунта?</span>
                        <Link className={styles.redirect} to='/registration'>Создать</Link>
                    </div>
                    <button
                        type='submit'
                        onClick={(e) => sendData(e)}
                    >Войти
                    </button>
                </div>

            </div>
        </form>
    )
}

export default Login;
