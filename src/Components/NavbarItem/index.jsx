import { NavLink } from "react-router-dom"

const NavBarItem = ({ to, className, children, onClick }) => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <li className={className}>
            <NavLink to={to} onClick={onClick} className={({ isActive }) => isActive ? activeStyle : undefined}>
                {children}
            </NavLink>
        </li>
    )
}

export { NavBarItem }