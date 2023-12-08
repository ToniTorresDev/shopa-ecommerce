// React
import React, { useContext } from "react"
import { ShoppingCartContext } from "../../context"

// Icons
import { XMarkIcon } from "@heroicons/react/24/solid"

// Styles
import "./styles.css"

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  const showModal = context.isProductDetailOpen
    ? "opacity-100 translate-x-0"
    : "opacity-0 -translate-x-full"
  const product = context.productToShow

  const productMaxRate = 5

  return (
    <aside
      className={`product-detail fixed right-0 flex flex-col rounded-lg border border-black bg-white p-5 transition-all duration-300 ease-in-out ${showModal}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Product</h2>

        <button onClick={() => context.toggleProductDetail()}>
          <XMarkIcon className="h-6 w-6 cursor-pointer text-black" />
        </button>
      </div>

      <h1 className="text-2xl font-bold">{product.title}</h1>

      <figure>
        <img
          className="mt-3 h-full w-full rounded-lg"
          src={product.image}
          alt={product.title}
        />
      </figure>

      <div className="mt-3 flex justify-between">
        <small>
          {product.rating?.rate}/{productMaxRate}
        </small>

        <small>{product.category}</small>
      </div>
      <p className="my-3">{product.description}</p>
    </aside>
  )
}

export default ProductDetail
