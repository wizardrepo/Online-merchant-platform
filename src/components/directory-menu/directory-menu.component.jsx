import React from 'react'

export const DirectoryMenu = (props) => {

    console.log("these are our props.attrs", props.attrs);
    return (
        <div className ="menu-item">
            <div className = "content">
            <h1 className = "title"> {props.attrs.product}</h1>
            <span className = "subtitle"> SHOP NOW </span>
            </div>
            

        </div>

    );
  
       
    }



