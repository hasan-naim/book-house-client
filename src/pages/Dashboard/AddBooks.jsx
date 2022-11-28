import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

function AddBooks() {
  const { userFromData } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [inputText, setInputText] = useState({
    name: "",
    catagorie: "Biography",
    img: "",

    originalPrice: "",
    resalePrice: "",
    usedTime: "",
    verified: false,
    condition: "",
    phone: "",
    location: "",
    desc: "",
    available: true,
    advertised: false,
    reported: false,
  });
  const [btnState, setBtnState] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputText);
    const doc = {
      ...inputText,
      postUserId: userFromData?._id,
      postedTime: new Date(),
      sellerName: userFromData?.name,
    };

    try {
      const res = await axios.post(
        "https://book-house-server-three.vercel.app/addBook",
        doc
      );
      console.log(res.data.message);
      toast.success(`Your Book ${inputText.name} is added to the website.`);
      setInputText({
        name: "",
        catagorie: "Biography",
        img: "",
        originalPrice: "",
        resalePrice: "",
        usedTime: "",
        verified: false,
        condition: "",
        phone: "",
        location: "",
        desc: "",
        available: true,
        reported: false,
      });
      navigate("/dashboard/myaddedbooks");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="w-full max-w-lg  shadow-xl bg-white rounded-lg mx-auto p-12">
        <div className="text-center">
          <h1 className="text-center mx-auto h-14 text-neutral font-bold text-4xl lg:text-5xl mb-8 text-gradient">
            Add Book
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Book Name
            </label>
            <input
              required
              value={inputText.name}
              onChange={(e) =>
                setInputText({ ...inputText, name: e.target.value })
              }
              type="text"
              placeholder="Book Name"
              className="input input-bordered w-full bg-white"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Book Image
            </label>
            <input
              required
              value={inputText.img}
              onChange={(e) =>
                setInputText({ ...inputText, img: e.target.value })
              }
              type="text"
              placeholder="Book Image Url"
              className="input input-bordered w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Catagorie
            </label>
            <select
              className="select select-bordered w-full "
              defaultValue={inputText.catagorie}
              onChange={(e) =>
                setInputText({ ...inputText, catagorie: e.target.value })
              }
            >
              <option value={"Biography"}>Biography</option>
              <option value={"Fiction"}>Fiction</option>
              <option value={"LifeStyle"}>LifeStyle</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Original Price
            </label>
            <input
              required
              value={inputText.originalPrice}
              onChange={(e) =>
                setInputText({ ...inputText, originalPrice: e.target.value })
              }
              type="number"
              placeholder="Price"
              className="input input-bordered w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Selling Price
            </label>
            <input
              required
              value={inputText.resalePrice}
              onChange={(e) =>
                setInputText({ ...inputText, resalePrice: e.target.value })
              }
              type="number"
              placeholder="Price"
              className="input input-bordered w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Used Time
            </label>
            <input
              required
              value={inputText.usedTime}
              onChange={(e) =>
                setInputText({ ...inputText, usedTime: e.target.value })
              }
              type="text"
              placeholder="3 months"
              className="input input-bordered w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Condition
            </label>
            <input
              required
              value={inputText.condition}
              onChange={(e) =>
                setInputText({ ...inputText, condition: e.target.value })
              }
              type="text"
              placeholder="good"
              className="input input-bordered w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Location
            </label>
            <input
              value={inputText.location}
              onChange={(e) =>
                setInputText({ ...inputText, location: e.target.value })
              }
              type="text"
              placeholder="23 streat, Tokoy"
              className="input input-bordered w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Phone
            </label>
            <input
              required
              value={inputText.phone}
              onChange={(e) =>
                setInputText({ ...inputText, phone: e.target.value })
              }
              type="number"
              placeholder="9922482972"
              className="input input-bordered w-full bg-white"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Description
            </label>

            <textarea
              className="textarea textarea-bordered w-full bg-white"
              value={inputText.desc}
              onChange={(e) =>
                setInputText({ ...inputText, desc: e.target.value })
              }
              type="text"
              placeholder="Book Details"
            ></textarea>
          </div>
          <div className="flex flex-row gap-2 mt-4">
            <label htmlFor="name" className="font-medium">
              Advertise
            </label>
            <input
              type="checkbox"
              defaultChecked={inputText.advertised}
              onChange={(e) =>
                setInputText({ ...inputText, advertised: e.target.checked })
              }
              className="checkbox"
            />
          </div>
          <div className="mt-6">
            <button
              disabled={btnState}
              className={`btn btn-primary btn-block  ${
                btnState ? "bg-gray-600 text-gray-800" : "gradient-bg"
              }`}
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;
