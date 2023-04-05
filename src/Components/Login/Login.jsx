import loginM from './Login.module.css';
import React, { useState } from 'react';
import useIntersectionObserver from '../../Srevice/ObserverService';
import { useNavigate } from 'react-router-dom';
import { login } from '../../http/Auth';

const Login = (params) => {


    const [loginF, setLogin] = useState("")

    const [password, setPassword] = useState("")

    const [hidden, setHidden] = useState(false)

    const [error, setError] = useState("")

    const navigate = useNavigate();

    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
            setHidden(!entry.isIntersect)
        })
    })

    const loginIn = () => {

        login(loginF,password).then(res =>{
            params.setLoginRoot(loginF);
            console.log("qwer");
        }).catch(err => {
            if(err.response.data.exception === "User is not active"){
                params.setLoginRoot(loginF);
                navigate('/regc');
            }
            
            setError(err.response.data.exception);
        })
    }

    return (
        <div className={!hidden ? loginM.element_animation : [loginM.element_animation,loginM.element_show].join(" ")} ref={cbRef}>
            <div id={loginM.wrapper}>
                <div id={loginM.signin} >
                    <input type="text" id="user" name="user" placeholder="Логин" 
                    onChange={(event) => setLogin(event.target.value)}/>
                    <input type="password" id="pass" name="pass" placeholder="Пароль" 
                    onChange={(event) => setPassword(event.target.value)}/>
                    <button onClick={() => {loginIn();}} type="submit">&#10095;</button>
                    <p>{error}</p>
                    <p>У вас еще нет аккаунта? <a onClick={() => {navigate('/registration');}}>регистрация</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login;