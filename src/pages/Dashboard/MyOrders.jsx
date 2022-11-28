import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import AddedBookCard from "../../components/AddedBookCard/AddedBookCard";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../Contexts/AuthProvider";

const fetchData = async (email) => {
  const res = await axios.get(`https://book-house-server-three.vercel.app/orders?email=${email}`);
  const data = res.data;
  return data;
};

export default function MyOrders() {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders", userEmail],
    queryFn: () => fetchData(userEmail),
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

  const { message } = data;
  if (message !== "success") {
    return (
      <div className="text-center">
        <h1 className="text-xl lg:text-5xl text-gray-400 font-medium">
          You didn't add any Book.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1 className="text-center text-xl lg:text-4xl font-medium text-slate-800 mb-8">
          My Orders
        </h1>

        {data.userAddedData.length > 0 ? (
          <div className="grid xl:grid-cols-1 gap-8">
            {data.userAddedData.map((dt) => {
              return <AddedBookCard key={dt._id} data={dt} />;
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
