import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Userlogin } from '../action/UserAction';

function Login(props) {
    const dispatch=useDispatch();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const onEmailHandler=(event)=> {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler=(event)=> {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler=(event)=> {
        event.preventDefault();

        let body={
            email: email,
            password: password
        }

        dispatch(Userlogin(body)).then(response => {
            if(response.payload.loginSuccess) {
                props.history.push('/');
            } else {
                alert("ERROR!!");
            }
        });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />
                
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />

                <button style={{margin: '15px'}} type="submit">Login</button>
            </form>
        </div>
    );
}

export default withRouter(Login);