import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="min-w-[220px] bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition flex flex-col items-center">
      
      {/* Product Image */}
      <img
        src={product.img}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-lg mb-4"
      />

      {/* Product Info */}
      <h2 className="text-lg font-bold text-center">{product.name}</h2>
      <p className="text-purple-400 mt-1 text-center">
        Rs. {product.price}{" "}
        <span className="text-gray-400 text-sm">({product.unit})</span>
      </p>

      {/* Add to Cart */}
      <button
        onClick={() => navigate("/cart")}
        className="mt-4 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;