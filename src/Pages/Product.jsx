import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

function Products() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const productsData = [
  { id: 1, name: "Apple", price: 280, unit: "per kg", category: "fruits", img: "#" },
  { id: 2, name: "Orange", price: 180, unit: "per kg", category: "fruits", img: "#" },
  { id: 3, name: "Banana", price: 120, unit: "per dozen", category: "fruits", img: "#" },
  { id: 4, name: "Mango", price: 250, unit: "per kg", category: "fruits", img: "#" },

  { id: 5, name: "Pen", price: 20, unit: "per piece", category: "study", img: "#" },
  { id: 6, name: "Pencil", price: 15, unit: "per piece", category: "study", img: "#" },
  { id: 7, name: "Notebook", price: 120, unit: "per piece", category: "study", img: "#" },
  { id: 8, name: "Eraser", price: 10, unit: "per piece", category: "study", img: "#" },

  { id: 9, name: "Milk", price: 110, unit: "per liter", category: "daily", img: "#" },
  { id: 10, name: "Coffee", price: 350, unit: "per 100g", category: "daily", img: "#" },
  { id: 11, name: "Tea", price: 220, unit: "per 100g", category: "daily", img: "#" },
  { id: 12, name: "Biscuit", price: 50, unit: "per packet", category: "daily", img: "#" },

  { id: 13, name: "Lays", price: 30, unit: "per packet", category: "snacks", img: "#" },
  { id: 14, name: "Kurkure", price: 20, unit: "per packet", category: "snacks", img: "#" },
  { id: 15, name: "Cheese Balls", price: 40, unit: "per packet", category: "snacks", img: "#" },
  { id: 16, name: "Ice Cream", price: 60, unit: "per piece", category: "snacks", img: "#" },

  { id: 17, name: "Coca Cola", price: 60, unit: "per 500ml bottle", category: "drinks", img: "#" },
  { id: 18, name: "Sprite", price: 60, unit: "per 500ml bottle", category: "drinks", img: "#" },
  { id: 19, name: "Fanta", price: 60, unit: "per 500ml bottle", category: "drinks", img: "#" },
  { id: 20, name: "Pepsi", price: 60, unit: "per 500ml bottle", category: "drinks", img: "#" },
];

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, amount) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const renderCategory = (title, categoryName) => {
    const categoryProducts = filteredProducts.filter(
      (p) => p.category === categoryName
    );

    if (categoryProducts.length === 0) return null;

    return (
      <div className="mt-12">
        <h1 className="text-2xl font-bold mb-6 text-purple-400">{title}</h1>

        <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-purple-400 mt-2">
                Rs. {product.price}{" "}
                <span className="text-gray-400 text-sm">
                  ({product.unit})
                </span>
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      <Navbar />

      <div className="p-8">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-3 rounded-lg bg-gray-900 mb-8 focus:ring-2 focus:ring-purple-500"
          onChange={(e) => setSearch(e.target.value)}
        />

        {renderCategory("Fresh Fruits", "fruits")}
        {renderCategory("Study Materials", "study")}
        {renderCategory("Daily Essentials", "daily")}
        {renderCategory("Snacks", "snacks")}
        {renderCategory("Drinks", "drinks")}

        {/* Cart Section */}
        <div className="mt-16 bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">
            🛒 Cart Summary
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-400">
                      Rs. {item.price} × {item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-purple-700 px-3 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-purple-700 px-3 rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-600 px-3 rounded"
                    >
                      🗑
                    </button>
                  </div>
                </div>
              ))}

              <hr className="my-4 border-gray-700" />

              <h3 className="text-xl font-bold mb-4">
                Total: Rs. {totalPrice}
              </h3>

              {/* Payment Selection */}
              <div className="mb-4">
                <select
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full p-3 bg-gray-800 rounded-lg"
                >
                  <option value="">Select Payment Method</option>
                  <option value="eSewa">eSewa</option>
                  <option value="Khalti">Khalti</option>
                </select>
              </div>

              {paymentMethod && (
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                  <p>
                    Demo Payment via <b>{paymentMethod}</b>
                  </p>
                  <p>Amount: Rs. {totalPrice}</p>
                </div>
              )}

              <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg">
                Confirm Purchase
              </button>

              <button
                onClick={clearCart}
                className="w-full mt-3 bg-red-700 hover:bg-red-800 py-2 rounded-lg"
              >
                Clear Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;