import axios from "axios";
import { AUTH_USER, LOGIN_USER, REGISTER_USER } from './type';

export function Userlogin(dataToSubmit) {
    const request=axios.post('http://localhost:3333/users/login', dataToSubmit, {withCredentials: true}).then(response => response.data);

    return { 
        type: LOGIN_USER,
        payload: request
    };
}

export function Userregister(dataToSubmit) {
    const request=axios.post('http://localhost:3333/users/register', dataToSubmit).then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    };
}

export function auth() {
    const request=axios.get('http://localhost:3333/users/auth').then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    };
}
