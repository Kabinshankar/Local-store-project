import Navbar from "../Components/Navbar";

function Cart() {
  return (
    <div className="min-h-screen bg-gradient from-black via-purple-950 to-black text-white">
      <Navbar />

      <div className="p-8">
        <h1 className="text-3xl font-bold text-purple-500">
          Purchase Page
        </h1>

        <p className="mt-4">
          Your selected products will appear here.
        </p>

        <button className="mt-6 bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
          Confirm Purchase
        </button>
      </div>
    </div>
  );
}

export default Cart;