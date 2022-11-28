import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function BookCard({ data, setReportBook, setAddToListForm }) {
  const [userInfo, setUserInfo] = useState({});
  const {
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
    postUserId,
  } = data;

  useEffect(() => {
    if (postUserId) {
      axios
        .get(
          `https://book-house-server-three.vercel.app/singleUser?id=${postUserId}`
        )
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data);
        })
        .catch((err) => {
          toast.error(err.message);
          console.log(err);
        });
    }
  }, [postUserId]);

  if (postUserId) {
  }

  return (
    <>
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
          <p className="text-gray-700 flex gap-1">
            <strong> Seller:</strong> {sellerName}
            {userInfo?.verified ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            ) : (
              <></>
            )}
          </p>
          <p className="text-gray-700">
            <strong> Posted:</strong> {postedTime.slice(0, 10)}
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
          <div className="mt-4 flex gap-3">
            <label
              onClick={() => setAddToListForm(data)}
              htmlFor="my-modal-3"
              className="btn btn-secondary "
            >
              Add To List
            </label>
            <label
              onClick={() => setReportBook(data)}
              htmlFor="confirm-modal"
              className="btn btn-primary "
            >
              Report
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookCard;
