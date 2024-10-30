import { useContext } from "react"
import { PlusIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../Context"

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    return (
        <article
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => context.toggleProductDetail()}>
            <figure className="relative mb-2 w-full h-4/5" onClick={() => context.toggleProductDetail}>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />
                <figcaption className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</figcaption>
                <button
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => { context.setCount(context.count+1); event.stopPropagation(); }}>
                    <PlusIcon className="h-6 w-6 text-black" />
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">{data.data.price}</span>
            </p>
        </article>
    )
}

export { Card }