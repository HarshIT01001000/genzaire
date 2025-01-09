import FeaturedCollectionCard from "../HomePageReusable/FeaturedCollectionCard"
function ProductsLayout({Item1,Item2}){
    return(
        <>
            <div className=" items-center hero">
      {/* Section Heading */}
      <h1 className="text-center text-[3rem] md:text-[4rem] font-bold font-jersey mt-[-100rem]  md:mt-[-33rem]">
        {Item1}
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center  md:space-x-2 lg:space-x-10 mt-20 md:mt-[9rem] px-4 md:px-8 lg:px-16">
        {Item2}
      </div>
    </div>
        </>
    )
}
export default ProductsLayout