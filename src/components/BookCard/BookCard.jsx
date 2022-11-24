import React from "react";

function BookCard({ data }) {
  const {
    name,
    catagorie,
    img,
    sellerName,
    postedTime,
    originalPrice,
    resalePrice,
    usedTime,
    verified,
    condition,
    phone,
    location,
    desc,
    available,
    advertised,
    reported,
  } = data;
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
      <div className="w-full h-[284px] overflow-hidden rounded-t-lg">
        <img
          class="w-full rounded-t-lg h-full bg-cover bg-center object-cover hover:scale-[1.2] duration-1000"
          src={img}
          alt=""
        />
      </div>
      <div class="p-5">
        <div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {name}
          </h5>
        </div>
        <p class="mb-3 font-normal text-gray-700 ">{desc}</p>
        <p className="text-gray-700">
          <strong> Seller:</strong> {sellerName}
        </p>
        <p className="text-gray-700">
          <strong> Posted:</strong> {postedTime.slice(0, 10)}
        </p>

        <p className="text-gray-700">
          <strong> Used:</strong> 3 months
        </p>
        <p className="text-gray-700">
          <strong> Condition:</strong> good
        </p>
        <p className="text-gray-700">
          <strong> Phone:</strong> +88 298342 234
        </p>
        <p className="text-gray-700">
          <strong> Location:</strong> Sa, Usa
        </p>
        <p className="text-gray-700">
          <strong> Original Price:</strong> $8
        </p>
        <p className="text-gray-700">
          <strong> Selling Price:</strong> $3
        </p>
        <div className="mt-4 flex gap-3">
          <button class="btn btn-secondary ">Add To List</button>
          <button class="btn btn-primary ">Report</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
