import React, {useState} from "react";
import CreateTimer from "./CreateTimer";

function App(){

    const [minutes,setMinutes] = useState("00");

    const [cssContainer,setCssContainer] = useState("containerPomodoro");
    const [buttonName, setButtonName] = useState("pomodoro");
    const [cssTimerButton,setCssTimerButton] = useState("timerButtonPomodoro")

    function handleButton(event){
        let eventName = event.target.name;
        
        switch (eventName){
            case "pomodoro":
                setMinutes(25);
                setCssContainer("containerPomodoro");
                setCssTimerButton("timerButtonPomodoro");
                setButtonName(eventName);
                break;
            case "short":
                setCssContainer("containerShort");
                setCssTimerButton("timerButtonShort");
                setMinutes(5);
                setButtonName(eventName);
                break;
            case "long":
                setMinutes(15);
                setCssContainer("containerLong");
                setCssTimerButton("timerButtonLong");
                setButtonName(eventName);
                break;
        }

    }


    return (
        <div >
           <div className={cssContainer}>
            <div className="btnContainer">
                <button onClick={handleButton} name="pomodoro" className={cssTimerButton}>Pomodoro</button>
                <button onClick={handleButton} className={cssTimerButton} name="short">Short Break</button>
                <button onClick={handleButton} className={cssTimerButton} name="long">Long Break</button> 
            </div>


            <CreateTimer btnName={buttonName} min={minutes}></CreateTimer>

        </div>
            
        </div>
    )
}

export default App;