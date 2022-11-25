import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

function AddToListForm({ data }) {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    _id,
    name,

    resalePrice,
  } = data;
  const [inputText, setInputText] = useState({
    myPhone: "",
    address: "",
  });

  const submitBtn = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      bookId: _id,
      bookName: name,
      price: resalePrice,
      userEmail: user?.email,
      userPhone: inputText.myPhone,
      userAddress: inputText.address,
    };
    try {
      const res = await axios.post("http://localhost:5000/addtolist", doc);
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success(`${name} is added to your list.`);
        submitBtn.current.click();
      } else if (res.data.message === "no valid information") {
        toast.error("Please fill the form correctly.");
      } else if (res.data.message === "exists") {
        toast.error("It already exist in your list.");
        submitBtn.current.click();
      }

      setInputText({
        myPhone: "",
        address: "",
      });
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <div className="py-4">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="Email" className="font-medium">
                  Book Name
                </label>
                <input
                  value={name}
                  type="text"
                  readOnly
                  className="input input-bordered w-full bg-gray-200 border-0 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="Email" className="font-medium">
                  Book Price
                </label>
                <input
                  value={resalePrice}
                  type="number"
                  readOnly
                  className="input input-bordered w-full bg-gray-200 border-0 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="Email" className="font-medium">
                  Your Name
                </label>
                <input
                  value={user?.displayName}
                  type="text"
                  readOnly
                  className="input input-bordered w-full bg-gray-200 border-0 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="Email" className="font-medium">
                  Your Email
                </label>
                <input
                  value={user?.email}
                  type="text"
                  readOnly
                  className="input input-bordered w-full bg-gray-200 border-0 outline-none"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="Email" className="font-medium">
                  Your Phone
                </label>
                <input
                  value={inputText.myPhone}
                  onChange={(e) =>
                    setInputText({ ...inputText, myPhone: e.target.value })
                  }
                  required
                  placeholder="+00 00000 000"
                  type="number"
                  className="input input-bordered w-full  border outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="Email" className="font-medium">
                  Your Address
                </label>
                <input
                  value={inputText.address}
                  onChange={(e) =>
                    setInputText({ ...inputText, address: e.target.value })
                  }
                  required
                  placeholder="123 street, Tokoy, Japan"
                  type="text"
                  className="input input-bordered w-full  border outline-none"
                />
              </div>
              <div className="mt-3 text-center">
                <button className="btn btn-secondary ">Submit</button>
                <label
                  htmlFor="my-modal-3"
                  ref={submitBtn}
                  className="btn btn-secondary hidden"
                ></label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToListForm;
