import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import AddToListForm from "../components/AddToListForm/AddToListForm";
import BookCard from "../components/BookCard/BookCard";
import ConfirmationModal from "../components/ConfirmationModal/ConfirmationModal";

function CatagoriePage() {
  const data = useLoaderData();
  console.log("data", data);
  const [reportBook, setReportBook] = useState({});
  const [addToListForm, setAddToListForm] = useState({});

  const handleYes = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:5000/report/${id}`, {
        reported: true,
      });
      console.log(res.data);
      toast.success("You have Successfully Reported!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const handleCancel = () => {};

  return (
    <section className="my-12">
      <div className="container">
        <div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((dt) => (
              <BookCard
                key={dt._id}
                data={dt}
                setAddToListForm={setAddToListForm}
                setReportBook={setReportBook}
              />
            ))}
          </div>
        </div>
      </div>
      <ConfirmationModal
        book={reportBook}
        handleYes={handleYes}
        handleCancel={handleCancel}
        title={`Are You Sure You want To Report ${reportBook?.name} book?`}
        description={""}
      />
      {addToListForm ? <AddToListForm data={addToListForm} /> : <></>}
    </section>
  );
}

export default CatagoriePage;
