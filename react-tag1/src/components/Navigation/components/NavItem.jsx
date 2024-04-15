import { NavLink } from "react-router-dom"

const NavItem = ({ name, href }) => {
    return (
        <NavLink to={href} style={{ margin: "0 10px" }}>
            {name}
        </NavLink>
    )
}

export default NavItem
