import React, {useState} from "react";
import CreateTimer from "./CreateTimer";

function App(){
    // const [minute, setMinute] = useState(0);

    // function handleName(event) {
    //     let name = event.target.name;


    //     if(name === "pomodoro"){
    //         setMinute(25);
    //     }else if(name === "short"){
    //         setMinute(5);
    //     }else if(name === "long"){
    //         setMinute(15);
    //     }
    //     console.log(event.target.name)
    // }

    return (
        <div >
            <div className="container">
                <div className="btnContainer">
                    <button onClick={handleName} name="pomodoro" className="timerButton">Pomodoro</button>
                    <button onClick={handleName} className="timerButton" name="short">Short Break</button>
                    <button onClick={handleName} className="timerButton" name="long">Long Break</button> 
                </div> 
                <CreateTimer min={25} />     
        
            </div>
        </div>
    )
}

export default App;