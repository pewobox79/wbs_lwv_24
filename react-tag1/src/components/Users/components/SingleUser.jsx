import { userData } from '../../../store/userData';
import '../styles.css'
import { useParams } from 'react-router-dom'

const SingleUser = () => {

    // hook von react router dom zum auslesen der params in der url => rückgabe ist ein object 
    const params = useParams();

    //suche den passenden user auf basis der params id
    const selectedUser = userData.find((item) => item.id === params.id)

    return (
        <div className="singleUserWrapper">
            <h4>{selectedUser.name}</h4>
            <p>Age: {selectedUser.age}</p>
            <p>Details: {selectedUser.description}</p>
        </div>
    )
}

export default SingleUser
