import { useState } from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

/* ================== IMAGES ================== */
import apple from "../assets/Productimgs/apple.jpg";
import orange from "../assets/Productimgs/orange.jpg";
import banana from "../assets/Productimgs/banana.jpg";
import mango from "../assets/Productimgs/mango.jpg";
import pen from "../assets/Productimgs/pen.jpg";
import pencil from "../assets/Productimgs/pencil.jpg";
import notebook from "../assets/Productimgs/notebook.jpg";
import eraser from "../assets/Productimgs/Erasers.jpg";
import milk from "../assets/Productimgs/milk.jpg";
import coffee from "../assets/Productimgs/coffee.jpg";
import tea from "../assets/Productimgs/tea.jpg";
import biscuit from "../assets/Productimgs/biscuit.jpg";
import lays from "../assets/Productimgs/lays.jpg";
import kurkure from "../assets/Productimgs/kurkure.jpg";
import cheeseballs from "../assets/Productimgs/CheeseBalls.jpg";
import icecream from "../assets/Productimgs/icecream.jpg";
import cocacola from "../assets/Productimgs/coke.jpg";
import sprite from "../assets/Productimgs/sprite.jpg";
import fanta from "../assets/Productimgs/fanta.jpg";
import pepsi from "../assets/Productimgs/pepsi.jpg";

/* ================== PRODUCTS ================== */
const products = [
  { id: 1, name: "Apple", price: 280, unit: "per kg", category: "fruits", img: apple },
  { id: 2, name: "Orange", price: 180, unit: "per kg", category: "fruits", img: orange },
  { id: 3, name: "Banana", price: 120, unit: "per dozen", category: "fruits", img: banana },
  { id: 4, name: "Mango", price: 250, unit: "per kg", category: "fruits", img: mango },
  { id: 5, name: "Pen", price: 20, unit: "per piece", category: "study", img: pen },
  { id: 6, name: "Pencil", price: 15, unit: "per piece", category: "study", img: pencil },
  { id: 7, name: "Notebook", price: 120, unit: "per piece", category: "study", img: notebook },
  { id: 8, name: "Eraser", price: 10, unit: "per piece", category: "study", img: eraser },
  { id: 9, name: "Milk", price: 110, unit: "per liter", category: "daily", img: milk },
  { id: 10, name: "Coffee", price: 350, unit: "per 100g", category: "daily", img: coffee },
  { id: 11, name: "Tea", price: 220, unit: "per 100g", category: "daily", img: tea },
  { id: 12, name: "Biscuit", price: 50, unit: "per packet", category: "daily", img: biscuit },
  { id: 13, name: "Lays", price: 30, unit: "per packet", category: "snacks", img: lays },
  { id: 14, name: "Kurkure", price: 20, unit: "per packet", category: "snacks", img: kurkure },
  { id: 15, name: "Cheese Balls", price: 40, unit: "per packet", category: "snacks", img: cheeseballs },
  { id: 16, name: "Ice Cream", price: 60, unit: "per piece", category: "snacks", img: icecream },
  { id: 17, name: "Coca Cola", price: 60, unit: "per 500ml bottle", category: "drinks", img: cocacola },
  { id: 18, name: "Sprite", price: 60, unit: "per 500ml bottle", category: "drinks", img: sprite },
  { id: 19, name: "Fanta", price: 60, unit: "per 500ml bottle", category: "drinks", img: fanta },
  { id: 20, name: "Pepsi", price: 60, unit: "per 500ml bottle", category: "drinks", img: pepsi },
];

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || item.category === category)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-24">
      <Navbar />

      {/* ================= SEARCH & CATEGORY ================= */}
      <div className="p-6 flex flex-col md:flex-row gap-4 justify-between items-center z-10 relative">
  <input
    type="text"
    placeholder="Search products..."
    className="px-4 py-2 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black placeholder-gray-500"
    onChange={(e) => setSearch(e.target.value)}
  />

  <div className="flex gap-3 flex-wrap mt-3 md:mt-0">
    {["all", "fruits", "study", "daily", "snacks", "drinks"].map((cat) => (
      <button
        key={cat}
        onClick={() => setCategory(cat)}
        className={`px-4 py-2 rounded-full ${
          category === cat ? "bg-purple-600" : "bg-gray-800 hover:bg-purple-700"
        }`}
      >
        {cat.toUpperCase()}
      </button>
    ))}
  </div>
</div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-purple-400">
                Rs {item.price} ({item.unit})
              </p>
              <button
                onClick={() => addToCart(item)}
                className="mt-3 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= FLOATING CART ================= */}
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-5 right-5 bg-gray-900 p-6 rounded-2xl shadow-2xl w-80 z-50"
        >
          <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <FaShoppingCart /> Cart ({cart.length})
          </h2>

          <div className="max-h-64 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-3">
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-400">
                    Rs {item.price} × {item.quantity}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <hr className="border-gray-700 my-3" />
          <h3 className="text-lg font-bold">Total: Rs {totalPrice}</h3>
          <button className="w-full mt-3 bg-green-600 hover:bg-green-700 py-2 rounded-lg">
            Checkout
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Products;