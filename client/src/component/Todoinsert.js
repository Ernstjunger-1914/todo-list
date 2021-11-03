import React, { useState } from 'react';
import Axios from 'axios';

function Todoinsert() {
    const [postname, setPostName]=useState('');
    const [main, setMain]=useState('');
    const [postList, setPostList]=useState([]);

    const submitpost=()=> {
        Axios.post('http://localhost:3033/api/insert', {postname: postname, main: main}).then(()=> {
                setPostList([...postList, {postname: postname, main: main},
            ]);
        });
    }

    return (
        <>
            <h1>C</h1>
            <div className="form">
                <label>Content Name</label>
                <input type="text" name="postname" onChange={(e)=> {
                    setPostName(e.target.value)
                }} />

                <label>Main</label>
                <input type="text" name="main"  onChange={(e)=> {
                    setMain(e.target.value)
                }} />

                <button onClick={submitpost}>Submit</button>
            </div>
        </>
    );
}

export default Todoinsert;