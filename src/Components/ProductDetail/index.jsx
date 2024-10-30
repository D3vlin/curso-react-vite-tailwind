import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ShoppingCartContext } from "../../Context"
import './styles.css'

const ProducDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isOpenDetail ? "flex" : "hidden"} productDetail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.toggleProductDetail()}><XMarkIcon className='h-6 w-6 text-black' /></div>
            </div>
        </aside>
    )
}

export { ProducDetail }