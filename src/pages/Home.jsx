import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import AdvertiseSection from "../components/AdvertiseSection/AdvertiseSection";
import Banner from "../components/Banner/Banner";
import CatagoriesSection from "../components/CatagoriesSection/CatagoriesSection";
import Loading from "../components/Loading/Loading";
import Subscribe from "../components/Subscribe/Subscribe";

function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["advertisebook"],
    queryFn: async () => {
      const res = await axios.get(
        `https://book-house-server-three.vercel.app/advertised`
      );
      console.log(res);
      return res.data;
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isError) {
    console.log(error);
    toast.erroor(error.message);
  }

  if (isLoading) {
    return <Loading />;
  }

  console.log("--------------------", data);

  return (
    <div>
      <Banner />

      {/* advertise section */}
      {data ? <AdvertiseSection data={data} /> : <></>}

      <CatagoriesSection />
      <Subscribe />
    </div>
  );
}

export default Home;
