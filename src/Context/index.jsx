import { createContext, useEffect, useState } from "react";
import { ApiFakeStore } from "../api"

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    //Shopping cart - products
    const [count, setCount] = useState(0)
    const [cartProducts, setCartProducts] = useState([])

    //Shopping cart - order
    const [order, setOrder] = useState([])

    //Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    const [searchByTitle, setSearchByTitle] = useState(null)

    useEffect(() => {
        fetch(`${ApiFakeStore}/products`)
            .then(response => response.json())
            .then(response => setItems(response))
            .catch(error => console.error(error))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

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

    return (
        <ShoppingCartContext.Provider value={
            {
                items,
                setItems,
                count,
                setCount, 
                toggleProductDetail,
                isOpenDetail,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                toggleCheckoutMenu,
                isOpenCheckoutMenu,
                order,
                setOrder,
                searchByTitle,
                setSearchByTitle,
                filteredItems
            }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }