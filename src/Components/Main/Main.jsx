import React, { useState } from 'react';
import useIntersectionObserver from '../../Srevice/ObserverService';
import main from './Main.module.css';



const Main = () => {
    const [hidden, setHidden] = useState(false)
    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
        setHidden(!entry.isIntersect)
        })
    })

  return (
    <div className={main.content} ref={cbRef}>
        <div className={!hidden ? main.element_animation : [main.element_animation,main.element_show].join(" ")}>
            <h4 className={main.h4}>Добро пожаловать на Web-версию</h4>
            <h1 className={main.h1}><span className={main.span}>Help </span>BeatMaker</h1>
            <h3 className={main.h3}>Еще нет аккаунта? Вы можете зарегистрироваться</h3>
            <div className={main.newslatter}>
                <form>
                    <input type="email" name="email" id="mail" placeholder="Введите вашу почту" className={main.input_first}/>
                    <input type="submit" name="submit" value="Регистрация" className={main.input_last}/>
                </form>
            </div>
        </div>
    </div>

  );
}

export default Main;


