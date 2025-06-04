import React, { useState, useEffect } from "react";
import axios from "axios";
import FeaturedCollectionCard from "../HomePageReusable/FeaturedCollectionCard";

function BestSAeller() {
  const [showContent, setShowContent] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="relative hero md:h-full h-[50rem] overflow-hidden flex justify-center items-center">
        <div
          className={`p-2 flex flex-col items-center hero transition-opacity duration-1000 md:mt-0 mt-10 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Section Heading */}
          <h1 className="text-center text-[3rem] md:text-[4rem] font-bold font-jersey relative z-10 mt-6">
            Best Seller
          </h1>

          <div className="carousel carousel-center space-x-2 md:space-x-4 p-4 rounded-box mt-10 relative z-0">
            {products.slice(6,10).map((product) => (
              <div key={product.id} className="carousel-item">
                <FeaturedCollectionCard item1={product.images}item2={product.title}item3={product.price}>

                </FeaturedCollectionCard>
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
