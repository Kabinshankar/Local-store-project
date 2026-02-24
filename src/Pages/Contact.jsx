import { useState } from "react";
import Navbar from "../Components/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#020617] text-white overflow-hidden">
      
      {/* ===== Background Grid + Orb ===== */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />

      {/* ===== Navbar (FIXED Z-INDEX) ===== */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* ===== Contact Section ===== */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Contact <span className="text-purple-500">Us</span>
        </h2>

        <p className="text-gray-400 max-w-xl text-center mb-10">
          Have questions about products or bulk orders? Send us a message and 
          we will get back to you quickly.
        </p>

        <div className="w-full max-w-xl bg-slate-900/60 backdrop-blur-lg border border-slate-700 p-8 rounded-2xl shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition shadow-lg shadow-purple-700/30"
            >
              Send Message
            </button>

          </form>
        </div>

      </section>
    </div>
  );
}

export default Contact;