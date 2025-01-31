import { useCart } from "../../context/CartContext";

function AddedItems() {
  const { cart } = useCart(); // Get cart data

  return (
    <div className="min-h-screen p-10 bg-base-200">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item, index) => (
            <div key={index} className="card p-4 bg-white shadow-lg">
              <img src={item.Item4} alt={item.item2} className="h-40 w-full object-cover rounded" />
              <h2 className="text-xl font-semibold mt-2">{item.item2}</h2>
              <p className="text-lg">{item.item3}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default AddedItems;
