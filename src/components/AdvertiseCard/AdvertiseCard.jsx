import React from "react";

function AdvertiseCard({ book }) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-300 shadow-md">
      <div className="w-full h-[284px] overflow-hidden rounded-t-lg">
        <img
          className="w-full rounded-t-lg h-full bg-cover bg-center object-cover hover:scale-[1.2] duration-1000"
          src={book.img}
          alt=""
        />
      </div>
      <div className="p-5 bg-white rounded-b-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tigh">{book.name}</h5>

        <p className="mb-2 font-normal text-gray-700"></p>
        {/* <span className="block mb-2 text-xl font-bold">{`$${price}`}</span> */}
        {/* <Link to={`/meals/${_id}`} className="btn btn-primary">
          Details
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link> */}
      </div>
    </div>
  );
}

export default AdvertiseCard;
