import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core';
import './AdditemStyles.css';


function Additem(){
    const [Title,setTitle]=useState('');
    const [Completed,setCompleted]=useState('');
    const history=useHistory();

    async function handleSubmit(e){
        e.preventDefault();
        const todos={Title,Completed};
        await fetch('http://localhost:8000/data',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(todos)
        }).then(()=>history.push('/'));
    }

    return (
        <div className="bg">
            <form className="adddata" onSubmit={handleSubmit}>
            <h1>Add a New Todo</h1>
                <label>
                    TodoName:
                </label>
                <textarea value={Title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>
                    Status:
                </label>
                <select value={Completed} onChange={(e)=>setCompleted(e.target.value)}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <div className="button1">
                <Button color="Primary" variant = "contained" >Add Data</Button>
                </div>
            </form>
        </div>
    );
}

export default Additem;