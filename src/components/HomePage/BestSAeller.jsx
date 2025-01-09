import FeaturedCollectionCard from "../HomePageReusable/FeaturedCollectionCard";
import React, { useState, useEffect } from "react";   
function BestSAeller() {
    const [showContent, setShowContent] = useState(false);
  
    useEffect(() => {
      // Trigger the content to appear after 1 second
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500); // 1 second delay
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
    <div  className={`items-center hero transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}>
      {/* Section Heading */}
      <h1 className="text-center text-[3rem] md:text-[4rem] font-bold font-jersey mt-[-100rem]  md:mt-[-33rem]">
        Best Seller
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center  md:space-x-2 lg:space-x-10 mt-20 md:mt-[9rem] px-4 md:px-8 lg:px-16">
        <FeaturedCollectionCard
          Item4={
            "https://wtflex.in/cdn/shop/files/LocalsOnlyWhiteWebsiteFront.png?v=1726668069&width=360"
          }
          item1={
            "https://wtflex.in/cdn/shop/files/wtf_wht.png?v=1687756362&width=360"
          }
          item2={"FUSION PANEL Denim Jacket "}
          item3={"₹999/"}
        />
        <FeaturedCollectionCard
          Item4={
            "https://wtflex.in/cdn/shop/files/Shadowjacketwebsiteback.jpg?v=1735877742&width=360"
          }
          item1={
            "https://wtflex.in/cdn/shop/files/Shadow_hoodie_website_back.jpg?v=1735029928&width=360"
          }
          item2={"FUSION PANEL Denim Jacket "}
          item3={"₹999/"}
        />
        <div><FeaturedCollectionCard
          Item4={
            "https://wtflex.in/cdn/shop/files/Artboard2-15.png?v=1707053447&width=360"
          }
          item1={
            "https://wtflex.in/cdn/shop/files/wtf_wht.png?v=1687756362&width=360"
          }
          item2={"FUSION PANEL Denim Jacket "}
          item3={"₹999/"}
        /></div>
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
