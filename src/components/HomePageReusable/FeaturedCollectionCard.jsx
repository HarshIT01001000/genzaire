import { useState } from "react";
function FeaturedCollectionCard({ item1, item2, item3, Item4, button }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="card group rounded-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <figure>
          <img
            src={isHovered ? item1 : Item4}
            alt="Shoes"
            className=" h-[25rem] transition-transform duration-300 ease-in-out hover:scale-95"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{item2}</h2>
          <p>{item3}</p>
          <div className="card-actions justify-end">
            <button className="btn  bg-base-300">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default FeaturedCollectionCard;
