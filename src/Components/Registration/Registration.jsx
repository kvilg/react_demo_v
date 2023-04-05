import React, { useState } from 'react';
import reg from './Registration.module.css';
import useIntersectionObserver from '../../Srevice/ObserverService';
import { registration } from '../../http/Auth';
import { useNavigate } from 'react-router-dom';

let indexrerender = 0;

const Registration = (params) =>{
    

    const [email,setEmail] = useState("");
    
    const [login,setLogin] = useState("");
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [pass2,setPass2] = useState("");

    const [error,setError] = useState("")


    const [hidden, setHidden] = useState(false)


    const navigate = useNavigate();

    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
        setHidden(!entry.isIntersect)
        })
    })



    const reqReg = () =>{
        if(pass !== pass2){
            setError("Password no eqolse");
            return;
        }
        registration(email,login,name,pass)
        .then(response => {
            navigate('/login');
        }).catch(err => {
            setError(err.response.data.exception);
            // setError(err.response.data);
        })
    }

    if(indexrerender == 0){
        setEmail(params.email);
        indexrerender = 1;
    }
    
    return (
        <div className={reg.content} ref={cbRef}>
            <div className={!hidden ? reg.element_animation : [reg.element_animation,reg.element_show].join(" ")}>
                <h1 className={reg.h1}>Создание аккаунта</h1>

                <label className={reg.label} htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Введите почту" 
                onChange={(event) => setEmail(event.target.value)} value={email}  name="email" required/>

                <label className={reg.label} htmlFor="login"><b>Логин</b></label>
                <input type="text" placeholder="Введите логин"
                onChange={(event) => setLogin(event.target.value)} name="login" required/>

                <label className={reg.label} htmlFor="name"><b>Имя</b></label>
                <input type="text" placeholder="Введите имя"
                onChange={(event) => setName(event.target.value)} name="name" required/>

                <label className={reg.label} htmlFor="psw"><b>Пароль</b></label>
                <input type="password" placeholder="Введите пароль"
                onChange={(event) => setPass(event.target.value)} name="psw" required/>

                <label className={reg.label} htmlFor="psw-repeat"><b>Подтверждение пароля</b></label>
                <input type="password" placeholder="Повторите пароль"
                onChange={(event) => setPass2(event.target.value)} name="psw-repeat" required/>

                <p className={reg.p}>Создавая аккаунт вы соглашаетесь с нашей <a className={reg.a} href="#">Политикой конфиденциальности</a>.</p>
                <button onClick={() => reqReg() } type="submit" className={reg.registerbtn}>Зарегистрироваться</button>

                <div className={[reg.container, reg.signin].join(" ")}>
                    <p className={reg.p}>{error}</p>
                    <p className={reg.p}>Уже есть аккаунт? <a className={reg.p} onClick={() => {navigate('/login');}}>Войти</a>.</p>
                </div>
            </div>
        </div>
    )
}


export default Registration;