import regC from './RegConfirm.module.css';
import useIntersectionObserver from '../../Srevice/ObserverService';
import React, { useState } from 'react';
import { active } from '../../http/Auth';

const RegConf = (params) =>{

    const [code,setCose] = useState("");

    const [error,setError] = useState("");

    const [hidden, setHidden] = useState(false)

    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
        setHidden(!entry.isIntersect)
        })
    })

    const activeAk = () =>{

        active(params.login, code).then(res => {
            console.log(res.response);
        }).catch(err =>{
            setError(err.response.data.exception);
        });

    }



    return(
        <div className={regC.content}>
            <div className={!hidden ? regC.element_animation : [regC.element_animation,regC.element_show].join(" ")} ref={cbRef}>
                <h1 className={regC.h1}>Регистрация прошла успешно</h1>
                <p className={regC.p}>Для того чтобы активировать Ваш аккаунт, следуйте инструкциям, высланным на почту.</p>

                    <label className={regC.label} htmlFor='email'><b>Код подтверждения</b></label>
                    <input type="text" placeholder="Введите код" required
                    onChange={(event) => setCose(event.target.value)}/>

                    <button onClick={() => {activeAk();}} type="submit" className={regC.confirmbtn}>Подтвердить</button>
            <p className={regC.p}>{error}</p>
            </div>
        </div>
    )
}

export default RegConf;