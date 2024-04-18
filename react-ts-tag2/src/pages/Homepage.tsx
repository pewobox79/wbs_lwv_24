import Button from "../components/Button"
import CleanupExercise from "../components/Exercises/CleanupExercise"
import RefExercise from "../components/Exercises/RefExercise"
import TypeScriptExercise from "../components/Exercises/TypeScriptExercise"

const Homepage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            {/*<Button/>*/}
            <CleanupExercise/>
            <TypeScriptExercise/>
            <RefExercise/>
        </div>
    )
}

export default Homepage
