import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { SideMenu } from "../SideMenu"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const closeCheckout = () => {
        context.toggleCheckoutMenu(false)
    }

    return (
        <SideMenu openMenu={context.isOpenCheckoutMenu} onCloseMenu={closeCheckout} title={"My Order"} />
    )
}

export { CheckoutSideMenu }