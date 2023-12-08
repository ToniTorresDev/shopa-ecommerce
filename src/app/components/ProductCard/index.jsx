import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { CheckIcon } from "@heroicons/react/24/solid"

function ProductCard(data) {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.toggleProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductToCart = (ev, product) => {
    ev.stopPropagation()
    context.setShoppingCart([...context.shoppingCart, product])
  }

  const renderIcon = (id) => {
    const isInCart = !!context.shoppingCart.find((product) => product.id === id)

    if (!isInCart) {
      return (
        <button
          className="absolute right-0 top-0 m-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-300 p-1"
          onClick={() => addProductToCart(event, data.data)}
        >
          +
        </button>
      )
    }
    return (
      <button className="absolute right-0 top-0 m-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 p-1">
        <CheckIcon className="h-6 w-6 text-white" />
      </button>
    )
  }

  return (
    <div
      onClick={() => showProduct(data.data)}
      className="h-60 w-56 cursor-pointer rounded-lg bg-white"
    >
      <figure className="relative mb-2 h-4/5 w-full">
        <span className="absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black">
          {data.data.category.name}
        </span>
        <img
          className="h-full w-full rounded-lg object-cover"
          src={data.data.image}
          alt="headphones"
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="line-clamp-2 text-sm font-light">
          {data.data.title}
        </span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  )
}

export default ProductCard
