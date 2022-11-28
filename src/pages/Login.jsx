import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

function Login() {
  const { logIn, googleLogin } = useContext(AuthContext);

  const [inputText, setInputText] = useState({
    email: "",
    pass: "",
  });
  const [btnState, setBtnState] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputText);

    setBtnState(true);

    try {
      const { user } = await logIn(inputText.email, inputText.pass);
      console.log(user);
      setInputText({
        email: "",
        pass: "",
      });
      getJwtToken(user);
      toast.success("Your are Successfully Loged In!");
      navigate(from, { replace: true });

      setBtnState(false);
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      setBtnState(false);
    }
  };

  const handleGoogleLogIn = async () => {
    setBtnState(true);

    try {
      const { user } = await googleLogin();

      const backendRes = await axios.post(
        "https://book-house-server-three.vercel.app/googleUser",
        {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
          role: "buyer",
          verified: false,
        }
      );
      getJwtToken(user);
      navigate(from, { replace: true });
      setBtnState(false);
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      setBtnState(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const getJwtToken = (user) => {
    axios
      .post("https://your-kitch-ph-assignment-11-backend.vercel.app/jwt", {
        email: user.email,
      })
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("bookhousetoken", res.data.token);
        }
      })
      .catch((err) => {
        toast.error(`${err.message} Login Again`);
      });
  };

  return (
    <section className="my-12">
      <div className="container">
        <div className="w-full max-w-lg shadow-xl bg-white rounded-lg mx-auto p-12">
          <div className="text-center">
            <h1 className="text-center mx-auto h-14 text-neutral font-bold text-4xl lg:text-5xl mb-8 text-gradient">
              Login
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
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

            <div className="mt-2 text-sm">
              New Here?{" "}
              <Link to={"/signup"} className="text-primary hover:underline">
                {" "}
                Sign Up.{" "}
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
                Login
              </button>
            </div>
          </form>
          <button
            disabled={btnState}
            onClick={handleGoogleLogIn}
            className="mt-8 btn-block btn btn-outline btn-success text-success"
          >
            GOOGLE
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
