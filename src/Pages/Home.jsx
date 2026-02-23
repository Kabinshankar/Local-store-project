import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-linear-to-r from-[#0f172a] to-[#1e293b] text-white">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen w-full relative flex items-center justify-center text-center px-6">
        
        {/* Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold">
            Local Grocery <span className="text-purple-500">Store</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Fresh vegetables, fruits, dairy products and daily essentials
            delivered quickly from your nearby store.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg transition shadow-lg shadow-purple-700/30"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= PRODUCT SECTION ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-black/40 backdrop-blur-md">
        
        <h2 className="text-4xl font-bold mb-12">
          Our <span className="text-purple-500">Products</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          
          {/* Product Card */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Fresh Fruits</h3>
            <p className="text-gray-400 mt-3">
              Organic apples, bananas, mangoes and seasonal fruits.
            </p>
             <button
            onClick={() => navigate("/products")}
            className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg transition shadow-lg shadow-purple-700/30"
          >
            Shop Now
          </button>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Study materials</h3>
            <p className="text-gray-400 mt-3">
              Pen, notebooks, and other stationery items.
            </p>
             <button
            onClick={() => navigate("/products")}
            className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg transition shadow-lg shadow-purple-700/30"
          >
            Shop Now
          </button>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Daily Essentials</h3>
            <p className="text-gray-400 mt-3">
              Milk, bread, eggs and household grocery items.
            </p>
             <button
            onClick={() => navigate("/products")}
            className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg transition shadow-lg shadow-purple-700/30"
          >
            Shop Now
          </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Snacks</h3>
            <p className="text-gray-400 mt-3">
              lays, kurkure, and other snacks.
            </p>
             <button
            onClick={() => navigate("/products")}
            className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg transition shadow-lg shadow-purple-700/30"
          >
            Shop Now
          </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Drinks</h3>
            <p className="text-gray-400 mt-3">
              Soft drinks, juices, and other beverages.
            </p>
             <button
            onClick={() => navigate("/products")}
            className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg transition shadow-lg shadow-purple-700/30"
          >
            Shop Now
          </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Other Items</h3>
            <p className="text-gray-400 mt-3">
              Other items that don't fit into the above categories.
            </p>
             <button
            onClick={() => navigate("/products")}
            className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg transition shadow-lg shadow-purple-700/30"
          >
            Shop Now
          </button>
          </div>
          

        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-8">
          Contact <span className="text-purple-500">Us</span>
        </h2>

        <p className="text-gray-400 max-w-xl mb-8">
          Have questions or want bulk orders? Reach out to your local
          FreshMart store anytime.
        </p>

        <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-lg shadow-lg">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
          />

          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
          />

          <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
            Send Message
          </button>
        </div>

      </section>
    </div>
  );
}

export default Home;