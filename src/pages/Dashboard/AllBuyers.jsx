import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import Loading from "../../components/Loading/Loading";

function AllBuyers() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      const res = await axios.get(
        "https://book-house-server-three.vercel.app/allbuyers"
      );
      return res.data;
    },
  });

  const [userClicked, setUserClicked] = useState({});

  const handleYes = async (selectedDataId) => {
    console.log(selectedDataId);
    const res = await axios.delete(
      `https://book-house-server-three.vercel.app/user?id=${selectedDataId}`
    );
    if (res.data.deletedCount === 1) {
      toast.success("User is deleted succesfully.");
      refetch();
    }
  };

  const handleCancel = () => {};

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

export default AllBuyers;
