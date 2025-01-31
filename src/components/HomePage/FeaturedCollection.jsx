import React, { useState, useEffect } from "react";
import FeaturedCollectionCard from "../HomePageReusable/FeaturedCollectionCard";
import { useCart } from "../../context/CartContext";
  
function FeaturedCollection() {
  const { addToCart } = useCart(); // Get addToCart function from context
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      Item4: "https://wtflex.in/cdn/shop/files/Shadowjacketwebsiteback.jpg?v=1735877742&width=360",
      item1: "https://wtflex.in/cdn/shop/files/wtf_wht.png?v=1687756362&width=360",
      item2: "FUSION PANEL Denim Jacket",
      item3: "₹999/",
    },
    {
      id: 2,
      Item4: "https://wtflex.in/cdn/shop/files/Shadowjacketwebsiteback.jpg?v=1735877742&width=360",
      item1: "https://wtflex.in/cdn/shop/files/Shadow_hoodie_website_back.jpg?v=1735029928&width=360",
      item2: "Fharshit rai",
      item3: "₹999/",
    },
    {
      id: 3,
      Item4: "https://wtflex.in/cdn/shop/files/Artboard2-15.png?v=1707053447&width=360",
      item1: "https://wtflex.in/cdn/shop/files/wtf_wht.png?v=1687756362&width=360",
      item2: "FUSION PANEL Denim Jacket",
      item3: "₹999/",
    },
  ];

  return (
    <div className={`items-center hero transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
      <h1 className="text-center text-[3rem] md:text-[4rem] font-bold font-jersey mt-[-106.9rem] md:mt-[-32rem]">
        Featured Collection
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 lg:space-x-10 mt-20 md:mt-[9rem] px-4 md:px-8 lg:px-16">
        {products.map((product) => (
          <FeaturedCollectionCard
            key={product.id}
            //spread operator
            {...product}
            onAddToCart={() => addToCart(product)} // Pass function to add item to cart
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCollection;
