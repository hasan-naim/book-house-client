import React, { useState } from "react";
import toast from "react-hot-toast";

function Subscribe() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your are now subscribed to our newsletter.");
    setInputText("");
  };

  return (
    <div className="my-8">
      <div className="container">
        <div className="max-w-xl border shadow-xl rounded-lg mx-auto p-8 gradient-bg">
          <h1 className="text-xl text-white font-bold text-center uppercase">
            Subscribe
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              {/* <label htmlFor="">Email</label> */}
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                type="email"
                className="input w-full px-2 py-2 border border-red-600 rounded-md"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mt-3 text-center">
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
