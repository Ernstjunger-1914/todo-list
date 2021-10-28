import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Userregister } from '../action/UserAction';

function Register(props) {
    const dispatch = useDispatch();

    const [email, setEmail]=useState('');
    const [name, setName]=useState('');
    const [password, setPassword]=useState('');

    const onEmailHandler=(event)=> {
        setEmail(event.currentTarget.value);
    }

    const onNameHandler=(event)=> {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler=(event)=> {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler=(event)=> {
        event.preventDefault();

        let body={
            name: name,
            email: email,
            password: password
        }

        dispatch(Userregister(body)).then(response => {
            if(response.payload.success) {
                props.history.push('/login');
            } else {
                alert("회원가입 실패");
            }
        })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            <form style={{ display: 'flex', flexDirection: 'column' }} onChange={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />

                <label>Name</label>
                <input type="text" value={name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />

                <button style={{margin: '15px'}} type="submit">회원가입</button>
            </form>
        </div>
    )
}

export default withRouter(Register);