import NavItem from './NavItem';
import { navData } from '../../../../store/navData';

const Navigation = () => {

    const NavList = navData.map((item) => (
        <NavItem key={item.id} {...item} />
    ))
    return (
        <nav>
            {NavList}
        </nav>
    )
}

export default Navigation
