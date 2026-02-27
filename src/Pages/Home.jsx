import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import image from "../assets/store.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// 👉 Add your product images here
import product1 from "../assets/Productimgs/apple.jpg";
import product2 from "../assets/Productimgs/coke.jpg";
import product3 from "../assets/Productimgs/lays.jpg";
import product4 from "../assets/Productimgs/icecream.jpg";

function Home() {
  const navigate = useNavigate();

  const products = [product1, product2, product3, product4];

  return (
    <div className="relative overflow-hidden bg-[#0f172a] text-white">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-pink-500/20 blur-3xl"></div>

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Fresh & Healthy <br />
              <span className="text-purple-400">
                Groceries Delivered
              </span>
            </h1>

            <p className="mt-6 text-lg max-w-lg opacity-80">
              Fresh vegetables, fruits and daily essentials delivered quickly
              from your nearby store.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg transition hover:scale-105 shadow-lg"
            >
              Shop Now
            </button>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={image}
            alt="Store"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* ================= IMAGE PRODUCT SLIDER ================= */}
      <section className="py-20 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular <span className="text-purple-400">Products</span>
        </h2>

        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...products, ...products].map((img, index) => (
            <div
              key={index}
              className="w-72 h-72 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
            >
              <img
                src={img}
                alt="Product"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
  id="about"
  className="py-24 px-6 lg:px-20"
>
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="grid md:grid-cols-2 gap-16 items-center"
  >
    <img
      src={image}
      alt="Store"
      className="rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
    />

    <div>
      <h2 className="text-4xl font-bold mb-6">
        About <span className="text-purple-500">FreshMart</span>
      </h2>
      <p className="text-lg opacity-80 leading-relaxed">
        We provide fresh produce and daily essentials sourced from
        trusted suppliers. Our mission is to make grocery shopping
        convenient and affordable for everyone.
      </p>
    </div>
  </motion.div>
</section>

      {/* ================= FOOTER ================= */}
<footer className="bg-black py-14 mt-20 border-t border-gray-800">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

    {/* Brand */}
    <div>
      <h3 className="text-2xl font-bold text-purple-400 mb-4">
        FreshMart
      </h3>
      <p className="text-gray-400">
        Your trusted local grocery store delivering fresh and quality
        products every day.
      </p>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Contact Us</h4>

      <div className="space-y-3 text-gray-400">

        <div className="flex items-center gap-3">
          <MdEmail className="text-purple-400" />
          <span>support@freshmart.com</span>
        </div>

        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-purple-400" />
          <span>+977 9866663629</span>
        </div>

      </div>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Follow Us</h4>

      <div className="flex gap-4">
        <a
          href="#"
          className="p-3 bg-gray-900 rounded-full hover:bg-purple-600 transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="#"
          className="p-3 bg-gray-900 rounded-full hover:bg-purple-600 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          className="p-3 bg-gray-900 rounded-full hover:bg-purple-600 transition"
        >
          <FaTwitter />
        </a>
      </div>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
    © {new Date().getFullYear()} FreshMart. All rights reserved.
  </div>
</footer>
    </div>
  );
}

export default Home;