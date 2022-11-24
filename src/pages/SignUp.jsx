import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const customToastElem = (t) => (
  <div
    className={`${
      t.visible ? "animate-enter" : "animate-leave"
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
            alt=""
          />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">Emilia Gates</p>
          <p className="mt-1 text-sm text-gray-500">
            Sure! 8:30pm works great!
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>
);
function SignUp() {
  const { signIn } = useContext(AuthContext);

  const [inputText, setInputText] = useState({
    email: "",
    name: "",
    img: "",
    pass: "",
    role: "",
  });
  const [btnState, setBtnState] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
    if (!inputText.role) {
      toast.custom(customToastElem);
    }
    setBtnState(true);

    //   signUp(inputText.email, inputText.pass)
    //     .then((result) => {
    //       const usr = result.user;
    //       /// get jwt token
    //       getJwtToken(usr);

    //       /// update the user
    //       updateUsr({
    //         displayName: inputText.name,
    //         photoURL: inputText.img,
    //       })
    //         .then((res) => {
    //           setInputText({
    //             email: "",
    //             name: "",
    //             img: "",
    //             pass: "",
    //           });
    //           toast.success("Your Account Is created Successfully!");
    //           navigate("/");
    //           setBtnState(false);
    //         })
    //         .catch((err) => {
    //           setBtnState(false);
    //           toast.error(err.message);
    //         });
    //     })
    //     .catch((err) => {
    //       setBtnState(false);
    //       toast.error(err.message);
    //     });
  };

  return (
    <section className="my-12">
      <div className="container">
        <div className="w-full max-w-lg shadow-xl bg-white rounded-lg mx-auto p-12">
          <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-8 font-mono">
            Sign Up
          </h1>
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
