import React from "react";
import banner from "../../assets/banner/banner.png";
function Banner() {
  return (
    <div>
      <div className={`relative min-h-screen bg-red-700`}>
        <div>
          {banner ? (
            <img src={banner} alt="" />
          ) : (
            <div className="min-h-screen bg-red-600"></div>
          )}
        </div>

        <div className="absolute top-[120px] lg:top-[200px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-white text-3xl lg:text-6xl">
            Buy/Sell Books Online
          </h1>
          <p className="text-white text-sm mt-3 font-light lg:text-lg">
            With one simple website we connect you to various buyers/sellers
            buying used textbooks online. By comparing textbook buyback prices,
            we ensure you receive the best prices for your textbooks. Shipping
            is free and you're often paid the same day your book is received.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
