import FeaturedCollectionCard from "../HomePageReusable/FeaturedCollectionCard";

function FeaturedCollection() {
  return (
    <>
    <h1 className=" text-center text-[4rem] font-bold font-serif mt-[3rem]">Featured Collection</h1>
    <div className=" md:flex justify-evenly mt-[5rem]">
    <FeaturedCollectionCard item2={"mera bhai first class "} item3={"999$/"}></FeaturedCollectionCard>
    <FeaturedCollectionCard item2={"mera bhai first class "} item3={"999$/"}></FeaturedCollectionCard>
    <FeaturedCollectionCard item2={"mera bhai first class "} item3={"999$/"}></FeaturedCollectionCard>

    </div>
    <h1 className=" text-center text-[4rem] font-bold font-serif mt-[3rem]">Best Sellers</h1>
    <div className="md:flex justify-evenly mt-[5rem] items-center">
    <FeaturedCollectionCard item2={"mera bhai first class "} item3={"999$/"}></FeaturedCollectionCard>
    <FeaturedCollectionCard item2={"mera bhai first class "} item3={"999$/"}></FeaturedCollectionCard>
    <FeaturedCollectionCard item2={"mera bhai first class "} item3={"999$/"}></FeaturedCollectionCard>

    </div>

    </>
  );
}

export default FeaturedCollection;
