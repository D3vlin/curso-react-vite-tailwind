import { createContext, useEffect, useState } from "react";
import { ApiFakeStore } from "../api"

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    //Shopping cart
    const [count, setCount] = useState(0)
    const [cartProducts, setCartProducts] = useState([])

    //Products
    const [items, setItems] = useState(null)

    //Product detail
    const [isOpenDetail, setIsOpenDetail] = useState(false)
    const toggleProductDetail = (isOpen = !isOpenDetail) => {
        setIsOpenDetail(isOpen)
        isOpen ? toggleCheckoutMenu(false) : null
    };
    const [productToShow, setProductToShow] = useState({})

    //Checkout Side Menu
    const [isOpenCheckoutMenu, setIsOpenCheckoutMenu] = useState(false)
    const toggleCheckoutMenu = (isOpen = !isOpenCheckoutMenu) => {
        setIsOpenCheckoutMenu(isOpen)
        isOpen ? toggleProductDetail(false) : null
        isOpen ? setProductToShow({}) : null
    };

    useEffect(() => {
        fetch(`${ApiFakeStore}/products`)
            .then(response => response.json())
            .then(response => setItems(response))
            .catch(error => console.error(error))
    }, [])

    return (
        <ShoppingCartContext.Provider value={
            { items, setItems, count, setCount, toggleProductDetail, isOpenDetail, productToShow, setProductToShow, cartProducts, setCartProducts, toggleCheckoutMenu, isOpenCheckoutMenu }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }