import { useContext } from "react"
import { Link } from "react-router-dom"
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

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.01.01',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: TotalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <SideMenu openMenu={context.isOpenCheckoutMenu} onCloseMenu={closeCheckout} title={"My Order"}>
            <div className="px-6 overflow-y-scroll flex-1">
                {
                    context.cartProducts.map((product) => (
                        <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.images} price={product.price} handleDelete={handleDelete} />
                    ))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between mb-2">
                    <span className="font-light">Total</span>
                    <span className="font-medium text-2xl">${TotalPrice(context.cartProducts)}</span>
                </p>
                <Link to={"/myorders/last"}>
                    <button
                        className="bg-black w-full py-3 text-white rounded-lg"
                        onClick={() => handleCheckout()}>
                        Checkout
                    </button>
                </Link>
            </div>
        </SideMenu>
    )
}

export { CheckoutSideMenu }