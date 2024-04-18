
type UserButtonType={
    name: string,
    id: string,
    handler: (id: string)=>void
}

const UserButton = ({ name, id, handler}:UserButtonType) => {
    return (
        <button onClick={()=> handler(id)}>
            {name}
        </button>
    )
}

export default UserButton
