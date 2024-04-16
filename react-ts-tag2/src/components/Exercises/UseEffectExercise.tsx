import { useEffect, useState } from "react"

const  UseEffecExercise = () => {

    const [number, setNumber] = useState(0)
    //useEffect handles side effects (mount, unmount.....)


    useEffect(() => {
        console.log("start")
        const interval = setInterval(() => {
            setNumber(prev => prev + 1)
        }, 500)

        //cleanup function
        return () => {
            console.log("cleared")
            clearInterval(interval)
        }

    }, [number])




    return (
        <div>
            <h3>BlogSection adfads{number}</h3>
            <button onClick={() => setNumber(prev => prev + 1)}>click</button>
        </div>
    )
}

export default UseEffecExercise
