import { createContext, useEffect, useState } from "react";
import { ApiFakeStore } from "../api"

const ShoppingCartContext = createContext()

//SignOut and Account
const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut

    if(!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if(!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

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
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        fetch(`${ApiFakeStore}/products`)
            .then(response => response.json())
            .then(response => setItems(response))
            .catch(error => console.error(error))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE", items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])


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

    //SignOut and Account
    const [accout, setAccout] = useState({})
    const [signOut, setSignOut] = useState(false)

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
                searchByCategory,
                setSearchByCategory,
                filteredItems,
                accout,
                setAccout,
                signOut,
                setSignOut
            }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage }