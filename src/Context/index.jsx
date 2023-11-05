import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

const useUser = ()=> {
  const [user, setUserData] = useState({});
  const setUser = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }
  const getUser = () => {
    const userDataStorage = localStorage.getItem("userData")
    return JSON.parse(userDataStorage);
  }

  // Find users
  const findUser = ()=>{
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    return usersData ? usersData : []

  }

  // Find User by email verify password match
  const findUserByUsername = (credentials)=>{
    const usersData = findUser(); 
    const user = usersData.find(user=>user.username == credentials.username && user.password == credentials.password);
    return user || undefined;
  }

  // Create a new user
  const createUser = (newUser)=>{
    const usersData = findUser();
    usersData.push(newUser)
    localStorage.setItem("usersData", JSON.stringify(usersData));
    return "successfull";
  }

  useEffect(()=>{
    setUserData(getUser())
  },[])

  return {user, setUser, getUser, findUserByUsername,createUser}
}

export const ShoppingCartProvider = ({children}) => {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0)
  const {user, setUser, getUser,findUserByUsername,createUser} = useUser();

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart · Order
  const [order, setOrder] = useState([])

  // Get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
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
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory,
      user,
      setUser,
      getUser,
      findUserByUsername,
      createUser
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

