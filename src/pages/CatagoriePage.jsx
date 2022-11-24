import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard/BookCard";

function CatagoriePage() {
  const data = useLoaderData();
  console.log("data", data);

  return (
    <section className="my-12">
      <div className="container">
        <div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((dt) => (
              <BookCard key={dt._id} data={dt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatagoriePage;
