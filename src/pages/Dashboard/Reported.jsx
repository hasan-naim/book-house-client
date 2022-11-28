import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import Loading from "../../components/Loading/Loading";

function Reported() {
  const [userClicked, setUserClicked] = useState({});
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["reportedItem"],
    queryFn: async () => {
      const res = await axios.get(
        `https://book-house-server-three.vercel.app/reportedBook`
      );
      return res.data;
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleYes = async (selectedDataId) => {
    // console.log(selectedDataId);
    try {
      const res = await axios.delete(
        `https://book-house-server-three.vercel.app/reportedBook?id=${selectedDataId}`
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

  if (isError) {
    console.log("error from MyOrders component by fetching data", error);
    toast.error(error.message);
  }

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);

  return (
    <section className="mb-24">
      <div>
        {data.length > 0 ? (
          <h1 className="text-center text-xl lg:text-4xl font-medium text-slate-800 mb-8">
            Reported Item
          </h1>
        ) : (
          <>
            <h1 className="text-xl text-center lg:text-5xl text-gray-400 font-medium">
              There is no book that reported.
            </h1>
          </>
        )}

        {data.length > 0 && (
          <div className="overflow-x-auto bg-gray-200 border-2 shadow-lg rounded-lg">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((dt, i) => (
                  <tr key={dt._id} className="hover">
                    <th>{i + 1}</th>
                    <td>{dt?.name}</td>
                    <td>{dt.sellerName}</td>

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

export default Reported;
