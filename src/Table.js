import React,{useState,useEffect} from 'react';
import TableData from './TableData';
import AddItemButton from './AddItemButton';


function Table(){
    let [datas,setDatas]=useState([]);
    useEffect(()=>{
        //fetch("https://jsonplaceholder.typicode.com/todos")
       fetch('http://localhost:8000/data')
        .then(response=>response.json())
        .then(data=>setDatas(data));
    },[datas]);

    function handleDelete(id)
    {
        fetch('http://localhost:8000/data/'+id,{
             method:'DELETE'
        })
        
    }

    //const arr=[];
    return (
        <div>
        <AddItemButton/>
        <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Todo</th>
              <th>Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data,index)=>{
                return (
                  <TableData id={data.id} todo={data.Title} status={data.Completed} key={index} handleDelete={handleDelete}/> 
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
    );
}
export default Table;