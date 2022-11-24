import React, { useEffect } from "react";
import errorImg from "../assets/error/404page.svg";
function ErrorPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="container">
        <div>
          <img className="max-w-xl mx-auto my-12" src={errorImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
