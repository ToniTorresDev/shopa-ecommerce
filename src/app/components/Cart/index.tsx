// React
import React, { useContext } from "react"
import { ShoppingCartContext } from "../../context"

// Icons
import { XMarkIcon } from "@heroicons/react/24/solid"

// Components
import ProductOrder from "../ProductOrder"

// Styles
import "./styles.css"
import { getTotalPrice } from "../../utils"

const Cart = () => {
  const context = useContext(ShoppingCartContext)
  const showModal = context.isShoppingCartOpen ? "flex" : "hidden"
  const cartList = context.shoppingCart
  const totalPrice = getTotalPrice(cartList)

  const deleteProduct = (id) => {
    const cart = context.shoppingCart
    const cartUpdated = cart.filter((product) => product.id !== id)
    context.setShoppingCart(cartUpdated)
  }

  const generateId = (length = 5) => {
    let result = ""
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
      counter += 1
    }
    return result
  }

  const handleCheckout = () => {
    const orderToAdd = {
      id: generateId(),
      products: cartList,
      totalProducts: cartList.length,
      totalPrice: totalPrice,
      created_at: new Date().toLocaleDateString(),
      updated_at: new Date().toLocaleDateString(),
    }

    context.setOrders([...context.orders, orderToAdd])
    context.setShoppingCart([])
  }

  return (
    <aside
      className={`product-detail fixed right-0 z-10 flex flex-col rounded-lg border border-black bg-white p-5 ${showModal}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Cart</h2>

        <button onClick={() => context.toggleShoppingCartModal()}>
          <XMarkIcon className=" h-6 w-6 cursor-pointer text-black" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-0">
        {cartList?.map((product) => (
          <ProductOrder
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={deleteProduct}
          />
        ))}
      </div>

      <div className="mt-4 px-6">
        <p className="flex items-center justify-between">
          <span className="font-light">Total:</span>
          <span className="text-2xl font-medium">
            <strong>${totalPrice}</strong>
          </span>
        </p>
      </div>

      <div className="px-6">
        <button
          className="mt-3 w-full rounded-lg bg-black px-4 py-2 text-white"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </aside>
  )
}

export default Cart
