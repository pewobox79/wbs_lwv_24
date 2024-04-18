import { TsButtonType } from "../../../types/buttons";


const TsButton = ({backgroundColor, padding, color = "red", fontSize = 1}: TsButtonType) => {
    return (
        <button 
            style={{ backgroundColor, 
            padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`, color, fontSize: `${fontSize}rem`}}>
            click mich
        </button>
    )
}

export default TsButton
