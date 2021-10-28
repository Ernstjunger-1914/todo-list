import React from 'react'
import axios from 'axios';

function Landing(props) {
    const onClickHandler=()=> {
        axios.get(`http://localhost:3333/users/logout`).then(response => {
            if(response.data.success) {
                props.history.push('/login');
            } else {
                alert("로그아웃에 실패");
            }
        });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            Landing
            <button onClick={onClickHandler}>Logout</button>
        </div>
    );
}

export default Landing;