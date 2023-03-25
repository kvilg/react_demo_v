import conf from './RegConf.module.css';
import React, { useState } from 'react';
import useIntersectionObserver from '../../Srevice/ObserverService';

const RegConf = () =>{
    const [hidden, setHidden] = useState(false)
    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
        setHidden(!entry.isIntersect)
        })
    })

    return(
        <div className={conf.content} ref={cbRef}>
            <div className={!hidden ? conf.element_animation : [conf.element_animation,conf.element_show].join(" ")}>
                <h1 className={conf.h1}>Регистрация прошла успешно</h1>
                <p className={conf.p}>Для того чтобы активировать Ваш аккаунт, следуйте инструкциям, высланным на почту.</p>
                <label for="email"><b>Код подтверждения</b></label>
                <input type="text" placeholder="Введите код" required/>
                <button type="submit" className={conf.confirmbtn}>Подтвердить</button>
            </div>
        </div>
    )
}

export default RegConf;