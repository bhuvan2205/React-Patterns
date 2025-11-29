export const AddProduct = ({ product, onChange, onAdd }) => {
  console.log("Render AddProduct");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
      <h2 className="text-lg font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={product.name}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer mt-4"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
