import { useState } from "react";


const Button = () => {

    const [number, setNumber] = useState(0);

    function increment(){
        
        setNumber(prev => prev +1) // best practice
        console.log("in function", number)

        //setNumber(number + 1) // kein gute pattern
    }

    console.log("ausserhalb", number)
    return <div>
            {number}
            <button onClick={increment}>increment</button>
            {number > 5 ? <p>number is greater than 5</p> : null}
            {number > 5 && <p>number is greater than 5</p>}
        </div>
    
}

export default Button
