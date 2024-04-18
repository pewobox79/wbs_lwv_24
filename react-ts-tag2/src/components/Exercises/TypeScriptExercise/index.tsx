import StyleButton from "./StyleButton"
import TsButton from "./TsButton"

const TypeScriptExercise = () => {
    return (
        <div>
            <h1>TypeScript Exercise</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <TsButton
                    backgroundColor="yellow"
                    padding={[10, 60, 30, 40]}
                    fontSize={2}
                />
                <button style={{backgroundColor: "green"}}>html button</button>
                <StyleButton 
                    text="Click Style"
                    myStyle={{backgroundColor: "red", color: "yellow", border: "1px solid  yellow"}}


                />
            </div>
        </div>
    )
}

export default TypeScriptExercise
