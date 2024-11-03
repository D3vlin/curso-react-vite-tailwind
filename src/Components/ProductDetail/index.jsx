import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { SideMenu } from "../SideMenu"

const ProducDetail = () => {
    const context = useContext(ShoppingCartContext)

    const closeDetail = () => {
        context.toggleProductDetail()
        context.setProductToShow({})
    }

    return (
        <SideMenu openMenu={context.isOpenDetail} onCloseMenu={closeDetail} title={"Detail"}>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg" src={context.productToShow.images?.[0]} alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-light text-sd">{context.productToShow.description}</span>
            </p>
        </SideMenu>
    )
}

export { ProducDetail }