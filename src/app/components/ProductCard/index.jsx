
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function ProductCard(data) {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.toggleProductDetail()
        context.setProductToShow(productDetail)
    }

    return (
        <div onClick={() => showProduct(data.data)} 
            className="bg-white cursor-poiinter w-56 h-60 rounded-lg"
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 px-3 py-0.5 bg-white/60 rounded-lg text-black text-xs m-2">
                    { data.data.category.name }
                </span>
                <img 
                    className="w-full h-full object-cover rounded-lg"
                    src={data.data.image} 
                    alt="headphones" 
                />
                <button className="absolute top-0 right-0 m-3 p-1 flex justify-center items-center bg-white w-6 h-6 rounded-full"
                    onClick={() => context.setShoppingCartCount(context.shoppingCartCount + 1)}    
                >
                    +
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">
                    {data.data.title}
                </span>
                <span className="text-lg font-medium">
                    ${data.data.price}
                </span>
            </p>
        </div>
    );
}

export default ProductCard;
