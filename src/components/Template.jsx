import React from "react";


function Template(props){
    return (
    <div>
        <h1>{props.timer}</h1>
        <button onClick={props.handleStart} >Start</button>
        <button onClick={props.handleStop} >Stop</button>
    </div>)


}

export default Template;