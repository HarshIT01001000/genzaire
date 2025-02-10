import React from "react";

const UserDetails = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-10 mb-10 text-black">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">❤️ Thank you</h2>
        
        {/* user detalis */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="@ Instagram"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="px-3">🇮🇳 +91</span>
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email ID"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* user address detalis */}
        <h3 className="text-lg font-bold mt-6 flex items-center">🏡 Shipping Address</h3>
        <div className="space-y-4 mt-2">
          <input
            type="text"
            placeholder="Address with Landmark"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Pincode"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="State"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="India"
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>
        </div>

        {/* note */}
        <h3 className="text-lg font-bold mt-6 flex items-center">📝 Order Note</h3>
        <textarea
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Additional notes about your order"
          rows="3"
        ></textarea>

        {/* order info */}
        <h3 className="text-lg font-bold mt-6 flex items-center">📦 Your Order</h3>
        <div className="mt-2 bg-gray-50 p-4 rounded-lg space-y-4">
          <p className="font-semibold">SAIRA SQUARE NECK KURTI x 1 <span className="float-right">₹569</span></p>
          <p className="text-sm text-gray-500">Mention Size - S</p>
          <p className="font-semibold mt-2">LILY BELL SLEEVE KURTI x 1 <span className="float-right">₹549</span></p>
          <p className="text-sm text-gray-500">Mention Size - S</p>
          <hr className="my-2" />
          <p className="font-semibold">Shipping Fee <span className="float-right">₹0</span></p>
          <p className="font-semibold">Payment Processing Fee <span className="float-right">₹13.42</span></p>
          <hr className="my-2" />
          <p className="text-xl font-bold">Total <span className="float-right">₹1131.42</span></p>
        </div>

        <button className="w-full mt-4 p-3 bg-black text-white rounded-lg font-semibold hover:bg-base-300 hover:text-black">
          Proceed to Pay ₹1131.42
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
