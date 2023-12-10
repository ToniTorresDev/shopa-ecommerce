import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  // Cart list
  const [shoppingCart, setShoppingCart] = useState([])

  // Shopping Modal
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)
  const toggleShoppingCartModal = () =>
    setIsShoppingCartOpen(!isShoppingCartOpen)

  // Cart order
  const [orders, setOrders] = useState([])

  // Product detail modal state - true/false
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)

  // Product to show in modal
  const [productToShow, setProductToShow] = useState({})

  const [products, setProducts] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  // Get Products by title
  const [searchByTitle, setSearchByTitle] = useState("")

  useEffect(() => {
    try {
      new Promise((resolve) => setTimeout(resolve, 5000))
      setLoading(true)
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const filteredProductsByTitle = (products, text) => {
    if (searchByTitle === "") return products

    return products.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    )
  }

  useEffect(() => {
    if (searchByTitle !== "") {
      const p = filteredProductsByTitle(products, searchByTitle)
      setFilteredProducts(p)
    }
  }, [products, searchByTitle])

  return (
    <ShoppingCartContext.Provider
      value={{
        isProductDetailOpen,
        setIsProductDetailOpen,
        toggleProductDetail,
        productToShow,
        setProductToShow,
        shoppingCart,
        setShoppingCart,
        isShoppingCartOpen,
        setIsShoppingCartOpen,
        toggleShoppingCartModal,
        orders,
        setOrders,
        products,
        setProducts,
        loading,
        setLoading,
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
