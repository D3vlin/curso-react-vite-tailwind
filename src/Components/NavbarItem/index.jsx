import { NavLink } from "react-router-dom"

const NavBarItem = ({ to, className, children }) => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <li className={className}>
            <NavLink to={to} className={({ isActive }) => isActive ? activeStyle : undefined}>
                {children}
            </NavLink>
        </li>
    )
}

export { NavBarItem }