function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        backgroundAttachment: "fixed", // Ensures the background stays fixed
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl md:text-8xl font-bold font-jersey">Hello there</h1>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
