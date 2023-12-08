import OrderCardProduct from "../OrderCardProduct"

function OrderCard(props) {
  return (
    <div className="w-full rounded-lg border border-gray-300">
      {/* Header */}
      <div className="flex justify-between gap-3 rounded-t-lg border-b border-gray-300 bg-gray-300 px-4 py-3">
        <div className="flex flex-col">
          <div>PEDIDO REALIZADO</div>
          <div>22 de octubre de 2023</div>
        </div>
        <div className="flex flex-col">
          <div>TOTAL</div>
          <div>6,99 €</div>
        </div>
        <div className="flex flex-col">
          <div>ENVIAR A</div>
          <a
            href="/my-account"
            className="text-blue-800 hover:text-red-800 hover:underline"
          >
            Toni Torres Cuenca
          </a>
        </div>
        <div className="flex flex-col justify-end">
          <div>PEDIDO N.º 408-0813653-2150724</div>
          <div className="flex gap-1">
            <a
              href="#"
              className="text-blue-800 hover:text-red-800 hover:underline"
            >
              Ver los detalles del pedido
            </a>
            -
            <a
              href="#"
              className="text-blue-800 hover:text-red-800 hover:underline"
            >
              Factura
            </a>
          </div>
        </div>
      </div>

      {props.products?.map((product) => (
        <OrderCardProduct key={product.id} product={product} />
      ))}

      {/* Footer */}
      <div className="border-t border-gray-300 px-4 py-1">
        <a
          className="text-blue-800 hover:text-red-800 hover:underline"
          href="#"
        >
          Archivar pedido
        </a>
      </div>
    </div>
  )
}

export default OrderCard
