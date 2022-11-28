import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import Loading from "../../components/Loading/Loading";
import MyAddedBookCard from "../../components/MyAddedBookCard/MyAddedBookCard";
import { AuthContext } from "../../Contexts/AuthProvider";

function MyAddedBooks() {
  const { userFromData } = useContext(AuthContext);
  const [itemClicked, setItemClicked] = useState({});
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["addedbooks", userFromData],
    queryFn: async () => {
      const res = await axios.get(
        `https://book-house-server-three.vercel.app/myaddedbooks?userId=${userFromData?._id}`
      );
      return res.data;
    },
    staleTime: 0,
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isError) {
    console.log("error from MyOrders component by fetching data", error);
    toast.error(error.message);
  }

  if (isLoading) {
    return <Loading />;
  }

  const handleYes = async (selectedDataId) => {
    const res = await axios.delete(
      `https://book-house-server-three.vercel.app/book?id=${selectedDataId}`
    );
    if (res.data.deletedCount === 1) {
      toast.success("Your book is deleted succesfully.");
      refetch();
    }
  };

  const handleCancel = () => {};

  const advertiseTheBook = async (condition, id) => {
    try {
      const res = await axios.patch(
        `https://book-house-server-three.vercel.app/advertise?id=${id}&condition=${condition}`
      );
      console.log(res.data);
      refetch();
      if (condition) {
        toast.success("Your book will now advertise on our website.");
      } else {
        toast.error("Your book is not advertised on our website.");
      }
    } catch (error) {}
  };

  return (
    <section>
      <div>
        <h1 className="text-center text-xl lg:text-4xl font-medium text-slate-800 mb-8">
          My Books
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* single one */}
          {data.data.map((book) => (
            <MyAddedBookCard
              key={book._id}
              data={book}
              setItemClicked={setItemClicked}
              advertiseTheBook={advertiseTheBook}
            />
          ))}
        </div>
      </div>
      <ConfirmationModal
        book={itemClicked}
        handleYes={handleYes}
        handleCancel={handleCancel}
        title={`Are you sure you want to delete the ${itemClicked?.name} book?`}
        description={``}
      />
    </section>
  );
}

export default MyAddedBooks;
