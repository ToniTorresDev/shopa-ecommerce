// React
import React, { useContext } from "react"
import { ShoppingCartContext } from "../../context"

// Icons
import { XMarkIcon } from "@heroicons/react/24/solid"

// Components
import ProductOrder from "../ProductOrder"

// Styles
import "./styles.css"

const Cart = () => {
  const context = useContext(ShoppingCartContext)
  const showModal = context.isShoppingCartOpen ? "flex" : "hidden"
  const cartList = context.shoppingCart

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

      <div className="overflow-y-auto px-0">
        {cartList?.map((product) => (
          <ProductOrder
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  )
}

export default Cart
