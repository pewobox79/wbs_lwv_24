import { navData } from "../../store/navData"
import NavItem from "./components/NavItem"

const Navigation = () => {

    const NavList = navData.map((item, index) => {
        return <NavItem 
                key={item.name + index}
                    {...item} />
    })
    return (
        <nav>
            {NavList}
        </nav>
    )
}

export default Navigation
