import { Link } from 'react-router-dom'

const NavItem = ({ name, href }:{name:string, href:string}) => {
    return (
        <Link to={href} style={{margin: "0 5px"}}>
            {name}
        </Link>
    )
}

export default NavItem
