import React from "react";
import AdvertiseCard from "../AdvertiseCard/AdvertiseCard";

function AdvertiseSection({ data }) {
  return (
    <section className="mb-12">
      <div className="container">
        <div>
          <h1 className="text-gradient text-xl lg:text-3xl font-medium selection:bg-white mb-6">
            Advertised
          </h1>

          <div className="grid lg:grid-cols-3">
            {data.map((book) => (
              <AdvertiseCard book={book} key={book._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvertiseSection;
