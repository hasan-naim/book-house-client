import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const fetchData = async () => {
  const res = await axios.get("http://localhost:5000/catagories");
  const data = res.data;
  return data;
};

function CatagoriesSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["catagories"],
    queryFn: fetchData,
  });
  if (error) {
    console.log(error);
    return;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  console.log(data);
  return (
    <div>
      <div className="container">
        <div>
          <h1 className="text-gradient text-xl lg:text-3xl font-medium selection:bg-white">
            Catagories
          </h1>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {data.map((dt) => (
            <Link
              to={`/catagories/${dt.name}`}
              key={dt._id}
              className="w-full flex items-center gap-3 hover:bg-gray-200 p-3 rounded-md duration-500"
            >
              <img className="w-12 h-12 rounded-full" src={dt.img} alt="" />
              <span>{dt.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatagoriesSection;
