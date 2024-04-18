import { StyleButtonType } from "../../../types/buttons"


const StyleButton = ({text, myStyle}: StyleButtonType) => {
    return (
        <button style={myStyle}>
            {text}
        </button>
    )
}

export default StyleButton
