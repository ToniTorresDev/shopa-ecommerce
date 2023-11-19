// import { useContext } from "react";
// import { ShoppingCartContext } from "../../context";

function ProductCart(data) {
  // const context = useContext(ShoppingCartContext)

  return (
    <div className="h-60 w-56 cursor-pointer rounded-lg bg-white">
      <figure className="relative mb-2 h-4/5 w-full">
        <span className="absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black">
          {data.data.category.name}
        </span>
        <img
          className="h-full w-full rounded-lg object-cover"
          src={data.data.image}
          alt="headphones"
        />
        <span className="mt-0 text-3xl font-bold underline">lorem</span>
        <button className="absolute right-0 top-0 m-3 flex h-6 w-6 items-center justify-center rounded-full bg-white p-1">
          +
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  )
}

export default ProductCart
