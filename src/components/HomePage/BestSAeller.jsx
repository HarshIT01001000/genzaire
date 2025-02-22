import FeaturedCollectionCard from "../HomePageReusable/FeaturedCollectionCard";
import React, { useState, useEffect } from "react";   
import { useCart } from "../../context/CartContext";

function BestSAeller() {
    const [showContent, setShowContent] = useState(false);
    const { addToCart } = useCart();

    useEffect(() => {
      // Trigger the content to appear after 1 second
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500); // 1 second delay
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
    <>
    <div className="relative hero md:h-full h-[50rem] overflow-hidden flex justify-center items-center">
    <div  className={` p-2 flex flex-col items-center hero transition-opacity duration-1000  md:mt-0 mt-10 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}>
      {/* Section Heading */}
      <h1 className="text-center text-[3rem] md:text-[4rem] font-bold font-jersey  relative z-10 mt-6">
        Best Seller
      </h1>
     
      <div className="carousel carousel-center space-x-2 md:space-x-4 p-4  rounded-box mt-10 relative z-0">
        {products.map((product) => (
          <div key={product.id} className="carousel-item">
            <FeaturedCollectionCard
              {...product}
              onAddToCart={() => addToCart(product)}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
      <style jsx>{`
        @tailwind utilities;

        @layer utilities {
          .animate-fade-in-down {
            animation: fade-in-down 0.5s ease-out both;
          }

          @keyframes fade-in-down {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
      </>
  );
}

export default BestSAeller;
