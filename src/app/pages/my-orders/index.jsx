// React
import React, { useContext } from "react"
import { ShoppingCartContext } from "../../context"

// Components
import OrderCard from "../../components/OrderCard"
import DefaultLayout from "../../layouts/default"
import ProductDetail from "../../components/ProductDetail"

const MyOrders = () => {
  const context = useContext(ShoppingCartContext)
  const ordersList = context.orders

  return (
    <DefaultLayout>
      <div className="flex w-full max-w-screen-lg flex-col justify-center gap-5">
        {ordersList?.map((order) => (
          <OrderCard key={order.id} products={order.products} />
        ))}
      </div>
      <ProductDetail />
    </DefaultLayout>
  )
}

export default MyOrders
