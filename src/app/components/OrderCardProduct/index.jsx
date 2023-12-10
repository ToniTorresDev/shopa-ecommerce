import { useContext } from "react"
import { ShoppingCartContext } from "../../context"

import reBuyAgainIcon from "./../../assets/icons/re-buy-icon.png"

function OrderCardProduct(props) {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.showProductDetail()
    context.setProductToShow(productDetail)
  }

  return (
    <div className="flex gap-3 border-b border-gray-300 px-5 py-3">
      {/* Product info */}
      <div className="w-3/5">
        <h3 className="text-lg">
          <strong>Entregado el 23 de octubre</strong>
        </h3>
        <small>El pedido ha sido entregado en la dirección indicada.</small>

        <div className="mt-3 flex gap-3">
          <img
            className="aspect-square h-24 w-24 rounded-lg object-cover"
            width="96"
            height="96"
            src={props.product.image}
            alt={props.product.title}
          />
          <div className="flex flex-col gap-2">
            <a
              type="button"
              onClick={() => showProduct(props.product)}
              className="cursor-pointer text-blue-800 hover:text-red-800 hover:underline"
            >
              {props.product.title}
            </a>
            <small>
              El periodo de devolución terminó el 22 de noviembre de 2023
            </small>
            <div className="flex gap-3">
              <button
                type="button"
                className="mb-2 me-2 flex items-center justify-center gap-3 rounded-lg bg-yellow-400 px-2 py-1 text-sm font-medium text-black shadow hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
              >
                <img
                  width="30px"
                  height="30px"
                  src={reBuyAgainIcon}
                  alt="buy again this product"
                />
                Comprar de nuevo
              </button>
              <button
                type="button"
                className="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-900 shadow hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Ver tu artículo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex flex-1 flex-col items-center justify-center gap-3">
        <button
          type="button"
          className="mb-2 me-2 w-full rounded-lg bg-yellow-400 px-2 py-2 text-sm font-medium text-black shadow hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
        >
          Localiza tu paquete
        </button>
        <button
          type="button"
          className="mb-2 me-2 w-full rounded-lg border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-900 shadow hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Obtener ayuda
        </button>
        <button
          type="button"
          className="mb-2 me-2 w-full rounded-lg border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-900 shadow hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Evaluar vendedor
        </button>
        <button
          type="button"
          className="mb-2 me-2 w-full rounded-lg border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-900 shadow hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Escribir una opinión sobre el producto
        </button>
      </div>
    </div>
  )
}

export default OrderCardProduct
