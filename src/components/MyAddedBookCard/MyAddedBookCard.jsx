import axios from "axios";
import React from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

function MyAddedBookCard({ data, setItemClicked, advertiseTheBook }) {
  const {
    _id,
    name,
    img,
    sellerName,
    postedTime,
    originalPrice,
    resalePrice,
    usedTime,
    condition,
    phone,
    location,
    desc,
    available,
    advertised,
  } = data;
  console.log(data);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
      <div className="w-full h-[284px] overflow-hidden rounded-t-lg">
        <img
          className="w-full rounded-t-lg h-full bg-cover bg-center object-cover hover:scale-[1.2] duration-1000"
          src={img}
          alt=""
        />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {name}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 ">{desc}</p>
        <p className="text-gray-700">
          <strong> Seller:</strong> {sellerName}
        </p>
        <p className="text-gray-700">
          <strong> Posted:</strong> {postedTime?.slice(0, 10)}
        </p>

        <p className="text-gray-700">
          <strong> Used:</strong> {usedTime}
        </p>
        <p className="text-gray-700">
          <strong> Condition:</strong> {condition}
        </p>
        <p className="text-gray-700">
          <strong> Phone:</strong> {phone}
        </p>
        <p className="text-gray-700">
          <strong> Location:</strong> {location}
        </p>
        <p className="text-gray-700">
          <strong> Original Price:</strong> ${originalPrice}
        </p>
        <p className="text-gray-700">
          <strong> Selling Price:</strong> ${resalePrice}
        </p>
        <p className="text-gray-700">
          <strong> Available:</strong> {available ? "Yes" : "No"}
        </p>
        <p className="text-gray-700">
          <strong> Advertised:</strong> {advertised ? "Yes" : "No"}
        </p>
        <div className="mt-4 flex gap-3">
          {advertised ? (
            <label
              onClick={() => advertiseTheBook(false, _id)}
              htmlFor="my-modal-3"
              className={`btn btn-secondary `}
            >
              Unadvertise
            </label>
          ) : (
            <label
              onClick={() => advertiseTheBook(true, _id)}
              htmlFor="my-modal-3"
              className={`btn btn-secondary `}
            >
              Advertise
            </label>
          )}

          <label
            onClick={() => setItemClicked(data)}
            htmlFor="confirm-modal"
            className="btn btn-primary "
          >
            Delete
          </label>
        </div>
      </div>
    </div>
  );
}

export default MyAddedBookCard;
