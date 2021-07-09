import React from 'react';


function Display(props){
    return(
        <div className="container">
            <p>id={props.id}</p>
            <p>title={props.title}</p>
            <p>completed={props.completed}</p>
        </div>

    );
}

export default Display;