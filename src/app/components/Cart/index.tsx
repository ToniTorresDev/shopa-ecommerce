
// React
import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";

// Icons
import { XMarkIcon } from '@heroicons/react/24/solid'

// Components
import ProductCart from "../ProductCart";

// Styles
import "./styles.css"

const Cart = () => {
    const context = useContext(ShoppingCartContext)
    const showModal = context.isShoppingCartOpen ? 'flex' : 'hidden'
    const cartList = context.shoppingCart
    
    return (
        <aside className={`z-10 product-detail p-5 flex flex-col fixed right-0 border border-black rounded-lg bg-white ${showModal}`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">
                    Cart
                </h2>

                <button onClick={() => context.toggleShoppingCartModal()}>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
                </button>
            </div>

            {
                cartList?.map((product) => (
                    <ProductCart 
                        key={product.id}
                        data={product}
                    />
                ))
            }
        </aside>
    );
}

export default Cart;
