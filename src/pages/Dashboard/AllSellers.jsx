import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import Loading from "../../components/Loading/Loading";

function AllSellers() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      const res = await axios.get(
        "https://book-house-server-three.vercel.app/allsellers"
      );
      return res.data;
    },
  });

  const [userClicked, setUserClicked] = useState({});
  const [btnState, setBtnState] = useState(false);

  const handleYes = async (selectedDataId) => {
    try {
      const res = await axios.delete(
        `https://book-house-server-three.vercel.app/user?id=${selectedDataId}`
      );
      if (res.data.deletedCount === 1) {
        toast.success("User is deleted succesfully.");
        refetch();
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleCancel = () => {};

  const makeVerify = async (condition, id) => {
    console.log(id, condition);
    try {
      const res = await axios.patch(
        `https://book-house-server-three.vercel.app/verifyUser?id=${id}&condition=${condition}`
      );
      console.log(res);
      refetch();
      if (condition) {
        toast.success("Your book will now advertise on our website.");
      } else {
        toast.error("Your book is not advertised on our website.");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  if (isError) {
    console.log(error);
    toast.erroor(error.message);
    return <div className="text-red-500 text-3xl">Try again</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mb-24">
      <div>
        {data.data.length === 0 ? (
          <>
            <h1 className="text-xl text-center lg:text-5xl text-gray-400 font-medium">
              There is no buyer.
            </h1>
          </>
        ) : (
          <h1 className="text-center text-xl lg:text-4xl font-medium text-slate-800 mb-8">
            All Buyers
          </h1>
        )}

        {data.data.length > 0 && (
          <div className="overflow-x-auto bg-gray-200 border border-2 shadow-lg rounded-lg">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Verify</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((dt, i) => (
                  <tr key={dt._id} className="hover">
                    <th>{i + 1}</th>
                    <td>{dt?.name}</td>
                    <td>{dt.email}</td>
                    <td>
                      {dt.verified ? (
                        <button
                          onClick={() => makeVerify(false, dt._id)}
                          className="btn btn-xs btn-primary"
                        >
                          Reject
                        </button>
                      ) : (
                        <button
                          onClick={() => makeVerify(true, dt._id)}
                          className="btn btn-xs btn-success"
                        >
                          Verify
                        </button>
                      )}
                    </td>
                    <td>
                      <label
                        onClick={() => setUserClicked(dt)}
                        htmlFor="confirm-modal"
                        className="btn btn-xs btn-primary"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <ConfirmationModal
        book={userClicked}
        handleYes={handleYes}
        handleCancel={handleCancel}
        title={`Are you sure you want to delete  ${userClicked?.name}?`}
        description={``}
      />
    </section>
  );
}

export default AllSellers;
