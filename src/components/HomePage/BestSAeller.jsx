import FeaturedCollectionCard from "../HomePageReusable/FeaturedCollectionCard";

function BestSAeller() {
  return (
    <div className=" items-center hero">
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
          item2={"mera bhai first class "}
          item3={"999$/"}
        />
        <FeaturedCollectionCard
          Item4={
            "https://wtflex.in/cdn/shop/files/Shadowjacketwebsiteback.jpg?v=1735877742&width=360"
          }
          item1={
            "https://wtflex.in/cdn/shop/files/Shadow_hoodie_website_back.jpg?v=1735029928&width=360"
          }
          item2={"mera bhai first class "}
          item3={"999$/"}
        />
        <div><FeaturedCollectionCard
          Item4={
            "https://wtflex.in/cdn/shop/files/Artboard2-15.png?v=1707053447&width=360"
          }
          item1={
            "https://wtflex.in/cdn/shop/files/wtf_wht.png?v=1687756362&width=360"
          }
          item2={"mera bhai first class "}
          item3={"999$/"}
        /></div>
      </div>
    </div>
  );
}

export default BestSAeller;
