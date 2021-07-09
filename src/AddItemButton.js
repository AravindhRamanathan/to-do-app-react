import React from 'react';
import {Link} from 'react-router-dom';
// import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function AddItemButton(){
    return(
        <div>
            <button className="button" color="Secondary" size="large" startIcon={AddIcon}><Link to ="/Additem" >Add Data</Link></button>
        </div>
    );
}

export default AddItemButton;