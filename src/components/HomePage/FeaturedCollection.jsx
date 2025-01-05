import FeaturedCollectionCard from "../HomePageReusable/FeaturedCollectionCard";

function FeaturedCollection() {
  return (
    <div className="bg-white">
      <h1 className="text-center text-[4rem] font-bold font-serif mt-[3rem]">
        Featured Collection
      </h1>
      <div className="md:flex justify-evenly mt-[5rem]">
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
          item2={"mera bhai first class "}
          item3={"999$/"}
        />
        <FeaturedCollectionCard
          item2={"mera bhai first class "}
          item3={"999$/"}
        />
      </div>
      <h1 className="text-center text-[4rem] font-bold font-serif mt-[3rem]">
        Best Sellers
      </h1>
      <div className="md:flex justify-evenly mt-[5rem] items-center">
        <FeaturedCollectionCard
          item2={"mera bhai first class "}
          item3={"999$/"}
        />
        <FeaturedCollectionCard
          item2={"mera bhai first class "}
          item3={"999$/"}
        />
        <FeaturedCollectionCard
          item2={"mera bhai first class "}
          item3={"999$/"}
        />
      </div>
    </div>
  );
}

export default FeaturedCollection;
