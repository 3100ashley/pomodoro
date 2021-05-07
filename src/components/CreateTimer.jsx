import React,{useState} from "react";
import Template from "./Template";


function CreateTimer(props){
    let minutes;
    let seconds = "00";


    const [time,setTime] = useState(props.min + ":" + seconds);

    function handleStart(){
        minutes = props.min - 1;
        seconds = "59";
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        

        setTime(minutes + ":" + seconds);

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
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);
                setTime("Times up");
            }

            
        }

        let minutes_interval = setInterval(minutesTimer, 60000);
        let seconds_interval = setInterval(secondsTimer, 1000);
        
    }


    function handleStop(){
        setTime("I clicked stop")
    }


    return <Template timer={time} handleStart={handleStart} handleStop={handleStop}></Template>
}

export default CreateTimer;