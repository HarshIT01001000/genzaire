import React, { useState, useEffect } from "react";
import FeaturedCollectionCard from "../HomePageReusable/FeaturedCollectionCard";
import axios from "axios";
//useeffect run on first render
function FeaturedCollection() {
  const [showContent, setShowContent] = useState(false);
  const [products, setProducts] = useState([])
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
 useEffect(() => {
  const handleProduct=async () => {
    try {
      const response=await axios.get("https://fakestoreapi.com/products")
      setProducts(response.data);
      console.log(response.data);
      
    } catch (error) {
      
      console.log(error);
      
    }
  }
 handleProduct();
 },[])
 

  return (
    <div className="relative hero md:h-full h-[50rem] overflow-hidden flex justify-center items-center">
      <div className={`relative p-2 flex flex-col items-center hero transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-center text-[3rem] md:text-[4rem] font-bold font-jersey relative z-10 mt-6">
          Featured Collection
        </h1>

        <div className="carousel carousel-center space-x-2 md:space-x-4 rounded-box mt-10 relative z-0">
          {products.slice(0,5).map((product) => (
            <div key={product.id} className="carousel-item">
              <FeaturedCollectionCard item1={product.image}item2={product.title}item3={product.price}itemId={product.id}>
                
              </FeaturedCollectionCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollection;
