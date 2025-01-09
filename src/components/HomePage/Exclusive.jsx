function Exclusive() {
  return (
    <>
    <div>
    <h1 className=" text-center font-bold font-jersey text-5xl">Our Instagram Feeds</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {/* Item 1 */}
        <div className="relative group">
          <img
            src="https://wtflex.in/cdn/shop/files/Artboard2-7_03d475c7-457d-4b95-8417-6c97ac490467.png?v=1704975723&width=360"
            alt="T-Shirt"
            className="object-cover w-full h-auto"
          />
          {/* Instagram Logo */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              href="https://www.instagram.com/genzaire.wardrobe?igsh=MXRtM3lpOHdlYmI4ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative group">
          <img
            src="https://wtflex.in/cdn/shop/files/SPACEOUT2.jpg?v=1685034657&width=360"
            alt="Model"
            className="object-cover w-full h-auto"
          />
          {/* Instagram Logo */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              href="https://www.instagram.com/genzaire.wardrobe?igsh=MXRtM3lpOHdlYmI4ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>

        {/* Repeat similar structure for other items */}
        <div className="relative group">
          <img
            src="https://wtflex.in/cdn/shop/files/PRAISETOTHEHIGHEST1.png?v=1685034056&width=360"
            alt="T-Shirt"
            className="object-cover w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              href="https://www.instagram.com/genzaire.wardrobe?igsh=MXRtM3lpOHdlYmI4ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>

        {/* Add similar structures for other images */}
      </div>
      </div>
    </>
  );
}

export default Exclusive;
