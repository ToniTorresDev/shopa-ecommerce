// React
import React, { useContext } from "react"
import { ShoppingCartContext } from "../../context"

// Icons
import { XMarkIcon } from "@heroicons/react/24/solid"

// Styles
import "./styles.css"

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  const showModal = context.isProductDetailOpen ? "flex" : "hidden"
  const product = context.productToShow

  const productMaxRate = 5

  return (
    <aside
      className={`product-detail p-5 flex flex-col fixed right-0 border border-black rounded-lg bg-white ${showModal}`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Product</h2>

        <button onClick={() => context.toggleProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
        </button>
      </div>

      <h1 className="font-bold text-2xl">{product.title}</h1>

      <figure>
        <img
          className="w-full h-full rounded-lg mt-3"
          src={product.image}
          alt={product.title}
        />
      </figure>

      <div className="flex justify-between mt-3">
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
