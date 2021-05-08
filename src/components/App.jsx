import React, {useState} from "react";
import CreateTimer from "./CreateTimer";

function App(){

    const [minutes,setMinutes] = useState("00");
    
    function handleButton(event){
        let eventName = event.target.name;
        console.log(eventName)
        
        switch (eventName){
            case "pomodoro":
                setMinutes(25);
                break;
            case "short":
                setMinutes(5);
                break;
            case "long":
                setMinutes(15);
                break;
        }

    }


    return (
        <div >
           <div className="container">
            <div className="btnContainer">
                <button onClick={handleButton} name="pomodoro" className="timerButton">Pomodoro</button>
                <button onClick={handleButton} className="timerButton" name="short">Short Break</button>
                <button onClick={handleButton} className="timerButton" name="long">Long Break</button> 
            </div>
        
            <CreateTimer min={minutes}></CreateTimer>

        </div>
            
        </div>
    )
}

export default App;