import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Todorud() {
    const [postList, setPostList]=useState([]);
    const [newMain, setNewMain]=useState('');

    useEffect(()=> {
        Axios.get('http://localhost:3033/api/get').then((Response)=> {
            setPostList(Response.data);
        });
    }, []);
    
    const deletePost=(post)=> {
        Axios.delete(`http://localhost:3033/api/delete/${post}`);
    }
    
    const updatePost=(post)=> {
        Axios.put('http://localhost:3033/api/update', {
            postname: post,
            main: newMain,
        });
        setNewMain('');
    }

    return (
        <>
            <h1>RUD</h1>

            <div className="form">
                {postList.map((val)=> {
                    return (
                    <div className="card">
                        <h1>{val.postname}</h1>
                        <p>{val.main}</p>
                        <button onClick={()=> {deletePost(val.postname)}}>Delete</button>
                        <input type="text" id="updateinput" onChange={(e)=> {
                            setNewMain(e.target.value)
                        }} />
                        <button onClick={()=> {updatePost(val.postname)}}>Update</button>
                    </div>
                    );
                })}
        </div>
        </>
    );
}

export default Todorud;