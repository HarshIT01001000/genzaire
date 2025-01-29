// CheckoutForm.jsx
import React, { useState } from "react";

const OrderPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "Maharashtra",
    pinCode: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    });

    setErrors(newErrors);

    // If no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", formData);
      // You can add logic to submit data to the backend or next step
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-lg mt-[3rem] mb-[3rem]">
      {/* Contact Section */}
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Delivery Section */}
      <h2 className="text-xl font-semibold mb-4">Delivery</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Country/Region</label>
        <select
          name="country"
          value="India"
          onChange={handleChange}
          disabled
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option>India</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={`w-full p-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={`w-full p-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className={`w-full p-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Apartment, suite, etc.</label>
        <input
          type="text"
          name="apartment"
          placeholder="Apartment, suite, etc."
          value={formData.apartment}
          onChange={handleChange}
          required
          className={`w-full p-2 border ${errors.apartment ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.apartment && <p className="text-red-500 text-sm">{errors.apartment}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-2">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className={`w-full p-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className={`w-full p-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          >
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Goa</option>
          </select>
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-2">PIN Code</label>
          <input
            type="text"
            name="pinCode"
            placeholder="PIN code"
            value={formData.pinCode}
            onChange={handleChange}
            required
            className={`w-full p-2 border ${errors.pinCode ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </div>
      <div className="space-x-3 mb-4">
           <input type="text" placeholder="Enter Code" className="input input-bordered w-full max-w-xs" />
           <button className="btn">Apply</button>
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
     
  );
};
export default OrderPage;
