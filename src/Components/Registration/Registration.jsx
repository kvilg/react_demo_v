import React, { useState } from 'react';
import reg from './Registration.module.css';
import useIntersectionObserver from '../../Srevice/ObserverService';

const Registration = () =>{
    const [hidden, setHidden] = useState(false)
    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
        setHidden(!entry.isIntersect)
        })
    })



    return (
        <div className={reg.content} ref={cbRef}>
            <div className={!hidden ? reg.element_animation : [reg.element_animation,reg.element_show].join(" ")}>
                <h1 className={reg.h1}>Создание аккаунта</h1>

                <label className={reg.label} for="email"><b>Email</b></label>
                <input type="text" placeholder="Введите почту" name="email" required/>

                <label className={reg.label} for="psw"><b>Пароль</b></label>
                <input type="password" placeholder="Введите пароль" name="psw" required/>

                <label className={reg.label} for="psw-repeat"><b>Подтверждение пароля</b></label>
                <input type="password" placeholder="Повторите пароль" name="psw-repeat" required/>

                <p className={reg.p}>Создавая аккаунт вы соглашаетесь с нашей <a className={reg.a} href="#">Политикой конфиденциальности</a>.</p>
                <button type="submit" className={reg.registerbtn}>Зарегистрироваться</button>

                <div className={[reg.container, reg.signin].join(" ")}>
                    <p className={reg.p}>Уже есть аккаунт? <a className={reg.p} href='/login'>Войти</a>.</p>
                </div>
            </div>
        </div>
    )
}


export default Registration;