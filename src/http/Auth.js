import {$host} from "./index";

export const loginJwt = async (token) => {
    const {data} = await $host.get('auth/login/jwt', {params: {
        token
    }})
    return data
}


export const login = async (login, password) => {
    const {data} = await $host.post('auth/login', {login, password});
    return data;
}


export const registration = async (email, login, name, password) => {

    
    
    let reg = {
        "email":email,
        "login":login,
        "name":name,
        "password":password
    }
    
    let {data} = await $host.post('auth/registration',reg);
    return data;
}


export const active = async (login, code) => {
    let codeJson = {
        "login":login,
        "code":code
    }
    const {data} = await $host.post('auth/active', codeJson);
    return data;
}

