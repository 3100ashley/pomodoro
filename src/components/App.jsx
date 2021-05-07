import React, {useState} from "react";
import CreateTimer from "./CreateTimer";

function App(){

    return (
        <div>
            <CreateTimer min={25} />
            <CreateTimer min={15} />
            <CreateTimer min={5} />
        
        </div>
    )
}

export default App;