import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

function SignUp() {
  const { signIn, updateUsr } = useContext(AuthContext);

  const [inputText, setInputText] = useState({
    email: "",
    name: "",
    img: "",
    pass: "",
    role: "",
  });
  const [btnState, setBtnState] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputText);
    if (!inputText.role) {
      toast.error("Please Select a Role!");
      return;
    }
    setBtnState(true);

    try {
      const { user } = await signIn(inputText.email, inputText.pass);
      console.log(user);
      const updtUser = await updateUsr({
        displayName: inputText.name,
        photoURL: inputText.img,
      });

      const backendRes = await axios.post(
        "https://book-house-server-three.vercel.app/user",
        {
          name: inputText.name,
          email: inputText.email,
          img: inputText.img,
          role: inputText.role,
          verified: false,
        }
      );
      if (!backendRes.data.insertedId) {
        toast.error("Something went wrong");
        return;
      }
      setInputText({
        email: "",
        name: "",
        img: "",
        pass: "",
        role: "",
      });
      toast.success("Your Account Is created Successfully!");
      navigate("/");
      setBtnState(false);
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      setBtnState(false);
    }
  };

  return (
    <section className="my-12">
      <div className="container">
        <div className="w-full max-w-lg shadow-xl bg-white rounded-lg mx-auto p-12">
          <div className="text-center">
            <h1 className="text-center mx-auto h-14 text-neutral font-bold text-4xl lg:text-5xl mb-8 text-gradient">
              Sign Up
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="Email" className="font-medium">
                Name
              </label>
              <input
                value={inputText.name}
                onChange={(e) =>
                  setInputText({ ...inputText, name: e.target.value })
                }
                type="text"
                required
                placeholder="Your Name"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="Email" className="font-medium">
                Profile Picture
              </label>
              <input
                value={inputText.img}
                onChange={(e) =>
                  setInputText({ ...inputText, img: e.target.value })
                }
                type="text"
                placeholder="Only Url"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="Email" className="font-medium">
                Email
              </label>
              <input
                value={inputText.email}
                onChange={(e) =>
                  setInputText({ ...inputText, email: e.target.value })
                }
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                value={inputText.pass}
                onChange={(e) =>
                  setInputText({ ...inputText, pass: e.target.value })
                }
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4 mb-6">
              <label htmlFor="password" className="font-medium">
                Choose A Role
              </label>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <input
                    value={"buyer"}
                    onChange={(e) =>
                      setInputText({ ...inputText, role: e.target.value })
                    }
                    required
                    name="radio-1"
                    type="radio"
                    className="radio"
                  />
                  Buyer
                </div>
                <div className="flex gap-3">
                  <input
                    value={"seller"}
                    onChange={(e) =>
                      setInputText({ ...inputText, role: e.target.value })
                    }
                    name="radio-1"
                    type="radio"
                    className="radio"
                  />
                  Seller
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm">
              Already Have an account?{" "}
              <Link to={"/login"} className="text-primary hover:underline">
                {" "}
                Login.{" "}
              </Link>
            </div>
            <div className="mt-6">
              <button
                disabled={btnState}
                className={`btn btn-primary btn-block  ${
                  btnState ? "bg-gray-600 text-gray-800" : "gradient-bg"
                }`}
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
