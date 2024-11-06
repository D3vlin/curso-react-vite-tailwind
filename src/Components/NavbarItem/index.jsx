import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

const NavBarItem = ({ to, className, children, onClick, isRestricted }) => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    //SignOut
    const parsedSignOut = JSON.parse(localStorage.getItem('sign-out'))
    const isUserSignOut = context.signOut || parsedSignOut

    //Account
    const parsedAccount = JSON.parse(localStorage.getItem('account'))
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderNavLink = () => {
        return (
            <li className={className}>
                <NavLink to={to} onClick={onClick} className={({ isActive }) => isActive ? activeStyle : undefined}>
                    {children}
                </NavLink>
            </li>

        )
    }

    const renderNavLinks = () => {
        if (!isRestricted) {
            if (to === '/sign-in') {
                return (
                    <li className={className}>
                        <NavLink to={to} onClick={() => handleSignOut()} className={({ isActive }) => isActive ? activeStyle : undefined}>
                            {(isUserSignOut) ? 'Sign In' : children}
                        </NavLink>
                    </li>
                )
            } else {
                return renderNavLink()
            }
        } else if (hasUserAnAccount && !isUserSignOut && isRestricted) {
            return renderNavLink()
        }
    }

    return renderNavLinks()
}

export { NavBarItem }