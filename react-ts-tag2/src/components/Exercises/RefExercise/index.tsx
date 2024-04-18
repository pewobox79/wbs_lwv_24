import { useRef } from 'react'

const RefExercise = () => {

    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e:{preventDefault: ()=>void}){
        e.preventDefault()

        const userData ={
            username: usernameRef.current?.value,
            password: passwordRef.current?.value
        }
        console.log("submitted", userData)
    }

    console.log("userRef", usernameRef)
    return (
        <div>
            <hr/>
            <h2>RefExercise</h2>

        <form onSubmit={handleSubmit}>
            <input type="text" name="username" 
            placeholder="Username" ref={usernameRef}/><br/>

            <input type="text" name='password' 
            placeholder='password' ref={passwordRef}/><br/>
            <button type='submit'>Submit</button>
        </form>

        </div>
    )
}

export default RefExercise
