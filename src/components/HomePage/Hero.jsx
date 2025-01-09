import Video from "/Images/Video.mp4";

function Hero() {
  return (
    <div className="relative hero md:h-full h-[50rem] overflow-hidden">
        <div
      className="hero min-h-screen hidden md:block"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        backgroundAttachment: "fixed", // Ensures the background stays fixed
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
      {/* Video Background */}
     <div className="md:hidden">
     <video
        className="absolute top-0 left-0 w-full h-[50rem] object-cover"
        src={Video}
        autoPlay
        loop
        muted
      ></video>

     </div>
      {/* Overlay for darkening */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="relative hero-content text-neutral-content text-center z-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl md:text-8xl font-bold font-jersey">Hello there</h1>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
