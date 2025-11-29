import { memo } from "react";

const ProductList = ({ products, onDelete }) => {
  console.log("Render ProductList");
  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4 max-w-md w-full">
      {products?.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center gap-4"
        >
          <h2 className="text-lg font-bold">{product.name}</h2>
          <button
            onClick={() => onDelete(product.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

// export default memo(ProductList, (prevProps, nextProps) => {
//   return prevProps.products === nextProps.products;
// });

const MemoizedProductList = memo(ProductList);

export { MemoizedProductList as ProductList };
