import React from "react";



function Template(props){

    return (
        <div className="mainContainer">
            <div className="timerContainer"><h1 className="time">{props.timer}</h1></div>
                <div className="templateBtnContainer">
                <button className="templateBtn" onClick={props.handleStart} ><i class="far fa-play-circle"></i></button>
                <button className="templateBtn" onClick={props.handleStop} ><i class="far fa-pause-circle"></i></button>
                <button className="templateBtn"><i class="fas fa-undo"></i></button>
            </div> 
        </div>
 
   )


}



export default Template;