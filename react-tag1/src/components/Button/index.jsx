import Title from "./components/Title"
const Button = ({ title, textColor }) => {

    return (
        <button style={{color: textColor}}>
            <Title title={title}/>
        </button>
    )
}

export default Button
