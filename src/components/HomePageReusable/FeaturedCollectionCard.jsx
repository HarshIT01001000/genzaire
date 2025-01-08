import { useState } from "react"
function FeaturedCollectionCard({item1, item2, item3,Item4}){
  const[isHovered, setIsHovered]=useState(false)

  const handleMouseEnter=()=>{
    setIsHovered(true)
  }
  const handleMouseLeave=()=>{
    setIsHovered(false)
  }
  
    return(
        <>
        <div className="card w-96 group" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <figure>
          <img
            src={isHovered? item1:Item4}
            alt="Shoes"
            className=" h-[25rem] transition-transform duration-300 ease-in-out hover:scale-95"
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