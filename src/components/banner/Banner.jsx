const Banner = () => {
  return (
    <div>
      <div
        className="hero lg:min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <div className=" spaceGrotesk mx-auto px-5 lg:px-0 text-center">
              <h1 className="text-4xl lg:text-5xl text-center font-bold py-5 text-white">
                EvoAutos - Find your vehicles
              </h1>
              <p className="text-xs lg:text-base font-semibold pt-5 pb-10 text-gray-200">
                An automotive brand shop is a retail establishment dedicated to
                showcasing and selling vehicles from a specific automotive
                brand. The showroom often features a range of vehicles, from
                compact cars to SUVs and luxury vehicles, allowing potential
                buyers to get a firsthand look at the design, performance, and
                innovations of the brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
