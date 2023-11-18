
// React
import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";

// Icons
import { XMarkIcon } from '@heroicons/react/24/solid'

// Styles
import "./styles.css"

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    const showModal = context.isProductDetailOpen ? 'flex' : 'hidden'
    
    return (
        <aside className={`product-detail p-5 flex flex-col fixed right-0 border border-black rounded-lg bg-white ${showModal}`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">
                    Title
                </h2>
                <button onClick={() => context.toggleProductDetail()}>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
                </button>
            </div>
            <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem unde quam facere amet reprehenderit. Hic amet atque blanditiis! Nobis impedit est eveniet consectetur quia ducimus explicabo exercitationem qui eligendi perspiciatis?
            </p>
        </aside>
    );
}

export default ProductDetail;
