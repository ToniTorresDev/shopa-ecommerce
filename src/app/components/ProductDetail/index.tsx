
import "./styles.css"
import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
    return (
        <aside>
            <div className="product-detail p-5 flex flex-col fixed right-0 border border-black rounded-lg bg-white">
                <div className="flex justify-between items-center">
                    <h2 className="font-medium text-xl">
                        Title
                    </h2>
                    <div>
                        <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
                    </div>
                </div>
                <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem unde quam facere amet reprehenderit. Hic amet atque blanditiis! Nobis impedit est eveniet consectetur quia ducimus explicabo exercitationem qui eligendi perspiciatis?
                </p>
            </div>
        </aside>
    );
}

export default ProductDetail;
