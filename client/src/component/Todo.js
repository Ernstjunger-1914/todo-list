import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function Todo() {
  const [postname, setPostName]=useState('');
  const [main, setMain]=useState('');
  const [postList, setPostList]=useState([]);
  const [newMain, setNewMain]=useState('');

  useEffect(()=> {
    Axios.get('http://localhost:3333/todo/get').then((Response)=> {
      setPostList(Response.data);
    });
  }, []);

  const submitpost=()=> {
    Axios.post('http://localhost:3333/todo/insert', {postname: postname, main: main}).then(()=> {
        setPostList([...postList, {postname: postname, main: main},
      ]);
    });
  }

  const deletePost=(post)=> {
    Axios.delete(`http://localhost:3333/todo/delete/${post}`);
  }

  const updatePost=(post)=> {
    Axios.put('http://localhost:3333/todo/update', {
      postname: post,
      main: newMain,
    });
    setNewMain('')
  }

  return (
    <div className="App">
      <h1>CRUD</h1>

      <div className="form">
        <label>Content Name</label>
        <input type="text" name="postname" onChange={(e)=> {
          setPostName(e.target.value)
        }} />

        <label>Main</label>
        <input type="text" name="main"  onChange={(e)=> {
          setMain(e.target.value)
        }} />

        <button className="csubmit" onClick={submitpost}>Submit</button>

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
    </div>
  );
}

export default Todo;