import React from 'react';
import {Button} from '@material-ui/core';
//import setDatas from './Table';
// import {useState} from 'react';

function TableData({id,todo,status,handleDelete}){
   
    return(
        <tr className="inputForCheck">
            <td><input type="checkbox" ></input></td>
            <td>{todo}</td>
            <td>{status===true?"Yes":"No"}</td>
            <td><Button color="Secondary" variant="contained" onClick={()=>handleDelete(id)}>Delete</Button></td>
        </tr>   
    );
    
}
export default TableData;