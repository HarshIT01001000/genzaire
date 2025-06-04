import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
function AddedItems() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const addToCart=async () => {
    try {

  
      const response=await axios.get(`https://fakestoreapi.com/carts/${id}`)
      console.log(response.data);
      setCart(response.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  addToCart()
  }, [])
  

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          Your cart is empty. Start shopping now! 🛍️
        </p>
      ) : (
        <>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <div className="flex justify-center bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto max-h-72 object-contain"
                    />
                  </div>

                  <div className="p-5 flex flex-col items-center">
                    <h2 className="text-xl font-semibold text-gray-800 text-center">
                      {item.title}
                    </h2>
                    <p className="text-lg text-gray-600 font-medium mb-4">${item.price}</p>

                    <button
                      className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition"
                      onClick={() => handleRemove(index)}
                    >
                      ❌ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-14">
            <Link to="/UserDetalis">
              <button
                className="btn btn-wide bg-black text-white hover:text-black"
                onClick={() => {
                  localStorage.removeItem("cart");
                  setCart([]);
                  alert("🧺 Cart cleared!");
                }}
              >
                Check Out
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default AddedItems;