import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  const handleAboutClick = () => {
    if (location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#about";
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div
          onClick={handleHomeClick}
          className="text-2xl font-bold cursor-pointer"
        >
          FreshMart
        </div>

        <div className="flex gap-6">
          <button
            onClick={handleHomeClick}
            className="hover:text-purple-500 transition-colors"
          >
            Home
          </button>

          <button
            onClick={handleAboutClick}
            className="hover:text-purple-500 transition-colors"
          >
            About Us
          </button>

          <Link
            to="/products"
            className="hover:text-purple-500 transition-colors"
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;