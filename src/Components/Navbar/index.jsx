import { NavBarItem } from "../NavbarItem"

const Navbar = () => {
    const menu1 = [
        { to: '/', text: 'Shop!', className: 'font-semibold text-lg' },
        { to: '/clothes', text: 'Clothes', className: '' },
        { to: '/electronics', text: 'Electronics!', className: '' },
        { to: '/furnitures', text: 'Furnitures', className: '' },
        { to: '/toys', text: 'Toys', className: '' },
        { to: '/others', text: 'Others', className: '' },
    ]


    const menu2 = [
        { to: '', text: 'Email!', className: 'text-black/60' },
        { to: '/myorders', text: 'My Orders', className: '' },
        { to: '/myaccount', text: 'My Account!', className: '' },
        { to: '/signin', text: 'Sign In', className: '' },
        { to: '/shoppCar', text: 'Shop Car', className: '' },
    ]

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                {
                    menu1.map(link => (
                        <NavBarItem key={link.to} to={link.to} className={link.className} >
                            {link.text}
                        </NavBarItem>
                    ))
                }
            </ul>
            <ul className="flex items-center gap-3">
                {
                    menu2.map(link => (
                        <NavBarItem key={link.to} to={link.to} className={link.className} >
                            {link.text}
                        </NavBarItem>
                    ))
                }
            </ul>
        </nav>
    )
}

export { Navbar }