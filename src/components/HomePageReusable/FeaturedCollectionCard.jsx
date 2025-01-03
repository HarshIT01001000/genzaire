function FeaturedCollectionCard({item1, item2, item3}){
    return(
        <>
        <div className="card w-96 group">
        <figure>
          <img
            src="https://wtflex.in/cdn/shop/files/wtf_wht.png?v=1687756362&width=360"
            alt="Shoes"
            className="rounded-2xl h-[25rem] transition-transform duration-300 ease-in-out hover:scale-95"
          />
        </figure>
        <div className="card-body">
          <p className="transition duration-300 group-hover:underline">
            {item2}
          </p>
          <h2 className="card-title">{item3}</h2>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
        </>
    )
}
export default FeaturedCollectionCard;