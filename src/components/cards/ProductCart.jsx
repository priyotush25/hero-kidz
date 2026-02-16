import Image from "next/image";
import { IoIosStar } from "react-icons/io";


const ProductCart = ({product}) => {

  console.log(product);

    return (
        <div className=" rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300 bg-white">
      {/* Image */}
      <div className="relative w-full h-52 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-2 line-clamp-2">
        {product.title}
      </h2>

      {/* Rating */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
        <div className="flex items-center text-yellow-500">
          <IoIosStar />
          <span className="ml-1">{product.ratings}</span>
        </div>
        <span>({product.reviews} reviews)</span>
        <span>• {product.sold} sold</span>
      </div>

      {/* Add to Cart */}
      <button
       
        className="w-full bg-primary py-2 font-semibold text-white rounded-lg flex items-center justify-center gap-2 transition"
      >
        Add to Cart
     
      </button>
    </div>
    );
};

export default ProductCart;