
import { useState, useEffect } from "react"
import DefaultLayout from "../../layouts/default"
import ProductCard from "./../../components/ProductCard"
import ProductDetail from "../../components/ProductDetail"

function Home() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    /* fetch("https://api.escuelajs.co/api/v1/products") */
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <DefaultLayout>
        <h1 className="text-3xl font-bold underline bg-red-100">
            Home page!
        </h1>
        <div className="grid justify-center gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            products?.map((product) => (
              <ProductCard 
                key={product.id}
                data={product}
              />
            ))
          }
        </div>
        <ProductDetail />
    </DefaultLayout>
  )
}

export default Home
