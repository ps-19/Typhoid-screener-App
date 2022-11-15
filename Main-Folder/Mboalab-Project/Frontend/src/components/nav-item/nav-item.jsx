import './nav-item.css'
import { NavLink } from 'react-router-dom'


function NavItem({to, child}) {
    return(
        <li className="nav-item active">
                    <NavLink className="link-item" to={`/${to}`}>
                      {child}
                    </NavLink>
                  </li>
    )
}


export default NavItem