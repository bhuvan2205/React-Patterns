import { products as initialProducts } from "./data/product";
import { useState } from "react";
import { ProductList } from "./components/product-list";
import { AddProduct } from "./components/add-product";
import { useCallback } from "react";
import { ProductHeader } from "./components/product-header";

const App = () => {
  const [product, setProduct] = useState({ name: "" });
  const [products, setProducts] = useState(initialProducts);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setProducts([...products, { id: products.length + 1, name: product.name }]);
    setProduct({ name: "" });
  };

  const handleDelete = useCallback((id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }, []);

  return (
    <div className="container mx-auto my-12">
      <div className="flex flex-col gap-4 items-center justify-center">
        <ProductHeader />
        {products.length > 0 ? (
          <ProductList products={products} onDelete={handleDelete} />
        ) : (
          <p className="text-gray-700">No products found</p>
        )}

        <AddProduct product={product} onChange={handleChange} onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default App;
