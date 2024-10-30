import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ShoppingCartContext } from "../../Context"
import './styles.css'

const ProducDetail = () => {
    const context = useContext(ShoppingCartContext)

    const closeDetail = () => {
        context.toggleProductDetail()
        context.setProductToShow({})
    }

    return (
        <aside className={`${context.isOpenDetail ? "flex" : "hidden"} productDetail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button onClick={() => closeDetail()}>
                    <XMarkIcon className='h-6 w-6 text-black' />
                </button>
            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg" src={context.productToShow.images?.[0]} alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-light text-sd">{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export { ProducDetail }