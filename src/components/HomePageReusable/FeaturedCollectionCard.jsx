import axios from "axios";
import React, { useState } from "react";

function FeaturedCollectionCard({ item1, item2, item3,itemId }) {
  const [isHovered, setIsHovered] = useState(false);
  const [addCart, setaddCart] = useState()
  const [counter, setcounter] = useState(1)
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleAddCart =async () => {
    try {
      const response=await axios.post("https://fakestoreapi.com/carts",
        
        {
  "userId": 1,
  "products": [{ productId: itemId, quantity: counter }]
  
}
      );
      
      setaddCart(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
      
    }
    
  
  };  

  return (
    <div
      className="card group rounded-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure>
        <img
          src={item1}
          alt="Product"
          className="h-[25rem] transition-transform duration-300 ease-in-out hover:scale-95"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{item2}</h2>
        <p>${item3}</p>
        <div>
          <input type="number" onChange={(e)=>setcounter(e.target.value)} value={counter} placeholder="You can't touch this" className="input" />
        </div>
        <div className="card-actions justify-end">
          <button onClick={handleAddCart} className="btn bg-base-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollectionCard;

