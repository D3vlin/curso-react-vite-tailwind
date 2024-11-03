import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { SideMenu } from "../SideMenu"
import { OrderCard } from "../OrderCard"
import { TotalPrice } from "../../Utils"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const closeCheckout = () => {
        context.toggleCheckoutMenu(false)
    }

    const handleDelete = (id) => {
        const filteredProduts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProduts)
    }

    return (
        <SideMenu openMenu={context.isOpenCheckoutMenu} onCloseMenu={closeCheckout} title={"My Order"}>
            <div className="px-6 overflow-y-scroll">
                {
                    context.cartProducts.map((product) => (
                        <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.images} price={product.price} handleDelete={handleDelete} />
                    ))
                }
            </div>
            <div className="px-6">
                <p className="flex justify-between justify-center">
                    <span className="font-light">Total</span>
                    <span className="font-medium text-2xl">${TotalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </SideMenu>
    )
}

export { CheckoutSideMenu }