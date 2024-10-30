import { createContext, useEffect, useState } from "react";
import { ApiFakeStore } from "../api"

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    const [items, setItems] = useState(null)
    const [count, setCount] = useState(0)
    const [isOpenDetail, setIsOpenDetail] = useState(false)

    const toggleProductDetail = () => setIsOpenDetail(!isOpenDetail)

    useEffect(() => {
        fetch(`${ApiFakeStore}/products`)
            .then(response => response.json())
            .then(response => setItems(response))
            .catch(error => console.error(error))
    }, [])

    return (
        <ShoppingCartContext.Provider value={
            { items, setItems, count, setCount, toggleProductDetail, isOpenDetail }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }