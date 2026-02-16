import products from "../../data/toys.json";
import ProductCart from "../cards/ProductCart";


const Products = () => {

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-10">Our Products</h1>

      <div className="grid grid-cols-4 gap-5">
       {
        products.map(product=> <ProductCart key={product.title} product={product}></ProductCart>)
       }
      </div>
    </div>
  );
};

export default Products;
