import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeaderLink from "../components/HeaderLink";
import { ModalContext } from "../context/Modals";
import SignUpModal from "../Modals/SignUpModal";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const { signUpModal, setSignUpModal } = useContext(ModalContext);
  const navigate = useNavigate();
  return (
    <div
      id="landingpage"
      className="relative rounded-lg w-full h-full bg-blue-950 text-white flex flex-col"
    >
      {/* <SignUpModal open={signUpModal} closemodal={setSignUpModal}>
        <SignUp />
      </SignUpModal> */}
      <header className="w-full flex justify-between items-center py-2 px-2">
        <div id="logo">
          <img src="" alt="" />
          <h1 className="text-2xl font-bold">
            <span>S</span>hort <span>T</span>erm <span>J</span>obs
          </h1>
        </div>

        <nav className="flex justify-between items-center w-2/5 pe-14">
          <HeaderLink name="Home" />
          <HeaderLink name="Services" />
          <HeaderLink name="About" />
          <HeaderLink name="Contact" />
          <HeaderLink name="FAQ" />
        </nav>
      </header>

      <main className="cus-grid px-2">
        <div className="flex flex-col">
          <h1 className="flex flex-col gap-5 text-4xl font-bold py-10 text-blue-800">
            <span className="text-white">Discover Exciting Opportunities</span>{" "}
            <span>Looking for short-term gigs?</span>
          </h1>
          <p className="text-lg font-medium text-slate-300">
            "Explore our curated job listings across various industries. Whether
            you’re a freelancer, part-timer, or just want to earn extra income,
            we’ve got something for you. Join our community today and find your
            next adventure!"
          </p>

          <div className="flex flex-col w-full items-center py-4 gap-5 mt-6">
            <button
              onClick={() => {
                navigate("/login");
                setSignUpModal(true);
              }}
              className="border px-10 font-semibold py-2 rounded-3xl w-2/3"
            >
              Sign Up
            </button>

            <Link to="login" className="w-2/3">
              <button className="border px-10 font-semibold py-2 rounded-3xl w-full bg-blue-700 hover:bg-blue-600">
                Log In
              </button>
            </Link>
          </div>
        </div>
        <img className="hero rounded-3xl" src="src/assets/hero.jpg" alt="" />
      </main>
    </div>
  );
}

export default LandingPage;
