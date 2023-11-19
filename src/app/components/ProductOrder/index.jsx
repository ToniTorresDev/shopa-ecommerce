// Icons
import { XMarkIcon } from "@heroicons/react/24/solid"

function ProductOrder(props) {
  // eslint-disable-next-line react/prop-types, no-unused-vars, no-undef
  const { id, title, imageUrl, price, handleDelete } = props

  return (
    <div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          {/* image */}
          <figure className="h-20 w-20">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={imageUrl}
              alt={title}
            />
          </figure>

          {/* title */}
          <small className="text-sm font-light">{title}</small>
        </div>
        <div className="flex items-center gap-2">
          {/* price */}
          <span className="text-lg font-medium">${price}</span>
          <button onClick={() => handleDelete(id)}>
            <XMarkIcon className="h6 w-6 text-black" />
          </button>
        </div>
      </div>

      <hr className="my-3" />
    </div>
  )
}

export default ProductOrder
