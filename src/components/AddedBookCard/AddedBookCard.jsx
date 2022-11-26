import React from "react";
import { Link } from "react-router-dom";

function AddedBookCard({ data }) {
  console.log(data);
  const { _id, bookName, bookImg, price, userAddress } = data;
  return (
    <div className="bg-white shadow-lg w-full max-w-xl h-full rounded-md px-8 py-8 mx-auto flex gap-4 items-center">
      <div className="avatar placeholder items-center">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
          <img src={bookImg} alt="" />
        </div>
      </div>
      {/* description of card */}
      <div>
        <h4 className="font-bold uppercase mb-1">{bookName}</h4>
        <p className="mb-1">
          {" "}
          <strong> Price:</strong> ${price}
        </p>
        <p className="mb-1">
          {" "}
          <strong> Address:</strong> {userAddress}
        </p>
        <div className="flex mt-2"></div>
      </div>
      <div className="ml-auto flex flex-col sm:flex-row gap-3">
        <Link to={`/pay/${_id}`} className="btn btn-sm btn-primary">
          Pay
        </Link>
      </div>
    </div>
  );
}

export default AddedBookCard;
