import React, {useContext, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";

import styles from "./auth.module.scss";
import API from "../../http/API";
import {Context} from "../../index";

const Registration = () => {
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
        API.registration(data)
        .then((data)=>{
            user.data = data
            user.isAuth = true
            toPage('/shop')
        })
        .catch(({message, response} )=> console.log(message, response?.data?.message))
    }

    return (
        <form className={styles.grid_container}>
            <div className={styles.root}>
                <div className={styles.description}>Регистрация</div>

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
                        <span>Есть аккаунт?</span>
                        <Link className={styles.redirect} to='/login'>Войти</Link>
                    </div>
                    <button
                        type='submit'
                        onClick={(e) => sendData(e)}
                    >Зарегистрировать
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Registration;




