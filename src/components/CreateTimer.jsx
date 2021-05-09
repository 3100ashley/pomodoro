import React,{useState} from "react";
import Template from "./Template";


function CreateTimer(props){
    let minutes = "00";
    let seconds = "00";
    let minutes_interval;
    let seconds_interval;
    
    
    const [time,setTime] = useState(minutes+ ":" + seconds);

    function minutesTimer(){
        minutes = minutes - 1;
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        setTime(minutes + ":" + seconds)
        
    }

    function secondsTimer(){
        seconds = seconds - 1;
        if(seconds < 10){
            seconds =  "0" + seconds;
        }
        setTime(minutes + ":" + seconds);

        if(seconds <= 0 && minutes > 0){
            seconds = 60;

        }else if(seconds <= 0 && minutes <= 0){
            clearInterval(minutes_interval)
            clearInterval(seconds_interval)
            setTime("Times up");
        }

    }
    function handleStart(){
        minutes = props.min - 1;
        seconds = "59";
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        setTime(minutes + ":" + seconds);

        minutes_interval = setInterval(minutesTimer, 60000);
        seconds_interval = setInterval(secondsTimer, 1000);
        
       
        
       

    }

    function handleStop(){
        
        setTime(time)
    }




    return <Template checkName={props.btnName} timer={time} handleStart={handleStart} handleStop={handleStop}></Template>

}

export default CreateTimer;