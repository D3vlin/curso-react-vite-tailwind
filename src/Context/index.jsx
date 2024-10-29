import { createContext, useEffect, useState } from "react";
import { ApiFakeStore } from "../api"

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    const [items, setItems] = useState(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch(`${ApiFakeStore}/products`)
            .then(response => response.json())
            .then(response => setItems(response))
            .catch(error => console.error(error))
    }, [])

    return (
        <ShoppingCartContext.Provider value={
            { items, setItems, count, setCount }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }