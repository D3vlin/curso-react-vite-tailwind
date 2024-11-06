import { useContext } from "react"
import { ShoppingBagIcon } from '@heroicons/react/16/solid'
import { NavBarItem } from "../NavbarItem"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const context = useContext(ShoppingCartContext)

    const menu1 = [
        { to: '/', text: 'Shop!', category: null, className: 'font-semibold text-lg', isRestricted: false },
        { to: '/clothes', text: 'Clothes', category: 'clothes', className: '', isRestricted: false },
        { to: '/electronics', text: 'Electronics!', category: 'electronics', className: '', isRestricted: false },
        { to: '/furnitures', text: 'Furnitures', category: 'furnitures', className: '', isRestricted: false },
        { to: '/toys', text: 'Toys', category: 'toys', className: '', isRestricted: false },
        { to: '/others', text: 'Others', category: 'others', className: '', isRestricted: false },
    ]


    const menu2 = [
        { to: '#', text: 'email@email.com', className: 'text-black/60', isRestricted: true },
        { to: '/my-orders', text: 'My Orders', className: '', isRestricted: true },
        { to: '/my-account', text: 'My Account!', className: '', isRestricted: true },
        { to: '/sign-in', text: 'Sign Out', className: '', isRestricted: false },
    ]

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                {
                    menu1.map(link => (
                        <NavBarItem key={link.to} to={link.to} onClick={() => context.setSearchByCategory(link.category)} className={link.className} isRestricted={link.isRestricted} >
                            {link.text}
                        </NavBarItem>
                    ))
                }
            </ul>
            <ul className="flex items-center gap-3">
                {
                    menu2.map(link => (
                        <NavBarItem key={link.to} to={link.to} className={link.className} isRestricted={link.isRestricted} >
                            {link.text}
                        </NavBarItem>
                    ))
                }
                <li className="flex items-center">
                    <ShoppingBagIcon className="h-6 w-6 text-black" /> {context.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }