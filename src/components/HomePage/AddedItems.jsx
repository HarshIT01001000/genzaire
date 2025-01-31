import React from "react";
import { useCart } from "../../context/CartContext";

function AddedItems() {
  const { cart, removeFromCart } = useCart(); // Get cart items and remove function

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          Your cart is empty. Start shopping now! 🛍️
        </p>
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                {/* Product Image (Full View) */}
                <div className="flex justify-center bg-gray-200">
                  <img
                    src={item.Item4}
                    alt={item.item2}
                    className="w-full h-auto max-h-72 object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col items-center">
                  <h2 className="text-xl font-semibold text-gray-800 text-center">
                    {item.item2}
                  </h2>
                  <p className="text-lg text-gray-600 font-medium mb-4">
                    {item.item3}
                  </p>

                  {/* Remove Button */}
                  <button
                    className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddedItems;
