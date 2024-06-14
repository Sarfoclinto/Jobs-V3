import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../context/Modals";
import SignUpModal from "../Modals/SignUpModal";
import SignUp from "../components/SignUp";
import { UserContext } from "../context/Users";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { signUpModal, setSignUpModal } = useContext(ModalContext);
  const {
    logins,
    setLogins,
    loginChange,
    allExistingUsers,
    setAllExistingUsers,
    setCurrentUser,
    isAuthenticated,
    setIsAuthenticated,
    currentUser,
  } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const handlelogin = () => {
  //   setLoading(true);
  //   allExistingUsers.forEach((element) => {
  //     if (
  //       logins.email === element.email &&
  //       logins.password === element.password
  //     ) {
  //       setCurrentUser(element);
  //       setLogins({ email: "", password: "" });
  //       console.log("login successful");
  //       setLoading(false);
  //       setIsAuthenticated(true);
  //       navigate("/main/dashboard");
  //       return;
  //     } else {
  //       setLogins({ email: "", password: "" });
  //       setLoading(false);
  //     }
  //   });
  // };

  const handlesignin = () => {
    const match = allExistingUsers.find((element) => {
      return (
        element.email === logins.email && element.password === logins.password
      );
    });
    if (match) {
      setCurrentUser(match);
      setIsAuthenticated(true);
      sessionStorage.setItem(
        "isAuthenticated",
        JSON.stringify(isAuthenticated)
      );
      navigate("/main/dashboard");
      setLogins({ email: "", password: "" });
    } else {
      setLogins({ email: "", password: "" });
      alert("Invalid email or password");
    }
  };

  return (
    <div
      id="loginpage"
      className="rounded-lg login w-full h-full text-white flex flex-col justify-center items-center"
    >
      <SignUpModal open={signUpModal} closemodal={setSignUpModal}>
        <SignUp />
      </SignUpModal>
      <div className="login z-0 min-w-fit px-20 py-10 w-2/5 opacity-75 backdrop-blur-2xl ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-3xl font-semibold ">Sign in</h1>
          <p className="text-slate-300 font-medium py-6">
            Login to manage your account
          </p>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={logins.email}
              onChange={loginChange}
              placeholder="web@example.com"
              className="border-2 border-slate-700 rounded-lg px-5 w-4/5 outline-blue-300 outline-1 bg-slate-400/10 mb-3 h-10 pl-7 "
            />
            <img
              src="src/assets/mail.png"
              alt=""
              className="absolute h-[15px] top-4 left-2"
            />
          </div>
          <div className="password relative">
            <input
              type="password"
              placeholder="*******************"
              value={logins.password}
              onChange={loginChange}
              name="password"
              className="border-2 border-slate-700 rounded-lg px-5 w-4/5 outline-blue-300 outline-1 bg-slate-400/10 mb-3 h-10 pl-7"
            />
            <img
              src="src/assets/key.png"
              alt=""
              className="absolute h-[15px] top-3 left-2"
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button
            // disabled={loading}
            onClick={() => {
              handlesignin();
            }}
            className="w-4/5 cursor-pointer my-3 py-2 rounded-lg bg-blue-600"
          >
            Sign in
          </button>
        </form>
      </div>

      <p className="mt-10 text-stone-500 font-medium">
        Don't have an account?{" "}
        <button
          onClick={() => {
            setSignUpModal(true);
          }}
          className="text-blue-500"
        >
          Sign up
        </button>{" "}
      </p>
      <Link className="text-blue-400 font-semibold">Forgot password?</Link>
    </div>
  );
}

export default LoginPage;
