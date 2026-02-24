import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 text-white">
      <h1 className="text-2xl font-bold">
        Local<span className="text-purple-500">Store</span>
      </h1>

      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;