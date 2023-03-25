import login from './Login.module.css';
import React, { useState } from 'react';
import useIntersectionObserver from '../../Srevice/ObserverService';


const Login = () => {
    const [hidden, setHidden] = useState(false)
    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
        setHidden(!entry.isIntersect)
        })
    })

    return (
        <div className={!hidden ? login.element_animation : [login.element_animation,login.element_show].join(" ")} ref={cbRef}>
            <div id={login.wrapper}>
                <form id={login.signin} method="" action="" autocomplete="off">
                    <input type="text" id="user" name="user" placeholder="Логин" />
                    <input type="password" id="pass" name="pass" placeholder="Пароль" />
                    <button type="submit">&#10095;</button>
                    <p>У вас еще нет аккаунта? <a href='/reg'>регистрация</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login;