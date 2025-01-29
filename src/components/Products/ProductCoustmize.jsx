import ProductsLayout from "../ProductsReuseableCompo/ProductsLayout"
import FeaturedCollectionCard from "../HomePageReusable/FeaturedCollectionCard"
function ProductCoustmize(){
    return(
        <>
        <ProductsLayout
        Item1={"Coustmize"}
        Item2={<>
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
            <div>
            <FeaturedCollectionCard 
          Item4={
            "https://wtflex.in/cdn/shop/files/Artboard2-15.png?v=1707053447&width=360"
          }
          item1={
            "https://wtflex.in/cdn/shop/files/wtf_wht.png?v=1687756362&width=360"
          }
          item2={"FUSION PANEL Denim Jacket "}
          item3={"₹999/"}
          />
            </div>
        </>}
        ></ProductsLayout>
        </>
    )
}
export default ProductCoustmize