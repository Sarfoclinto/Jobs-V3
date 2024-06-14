import React, { useContext } from "react";
import { ModalContext } from "../context/Modals";
import { UserContext } from "../context/Users";

function SignUp() {
  const { setSignUpModal } = useContext(ModalContext);
  const { signup, setSignup, setSignedup } = useContext(UserContext);

  const signupChange = (event) => {
    const { name, value, checked, type } = event.target;
    setSignup((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  // const [image, setImage] = useState(null);
  // const imageChange = (event) => {
  //   setImage(URL.createObjectURL(event.target.files[0]));
  // };

  const signupSubmit = (event) => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signup),
    })
      .then((res) => {
        setSignedup(true);
        return res.json();
      })
      .then(() => {
        setSignup({
          first_name: "",
          last_name: "",
          email: "",
          username: "",
          gender: "",
          password: "",
          tel: "",
        });
      })
      .then(() => {
        setSignUpModal(false);
      })
      .catch((err) => {
        setSignedup(false);
        console.log(err);
      });
  };
  return (
    <div id="signup" className="login w-5/6 h-5/6 flex rounded-lg">
      <div className="w-3/5"></div>
      <div className="w-2/5 flex flex-col gap-3 justify-center">
        <h1 className="text-2xl font-medium">Create your account</h1>
        <h3 className="text-stone-400 font-medium">Give-out and Accept Jobs</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-full flex flex-col gap-3"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="first name"
              required
              value={signup.first_name}
              onChange={signupChange}
              name="first_name"
              className="border h-11 rounded-lg w-4/5 bg-black/45 border-stone-600 border-solid pl-8"
            />
            <img
              src="src/assets/first.png"
              className="absolute h-[15px]  top-4 left-3"
              alt=""
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="last name"
              required
              onChange={signupChange}
              value={signup.last_name}
              name="last_name"
              className="border h-11 rounded-lg w-4/5 bg-black/45 border-stone-600 border-solid pl-8"
            />
            <img
              src="src/assets/last.png"
              className="absolute h-[15px]  top-4 left-3"
              alt=""
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="username"
              required
              onChange={signupChange}
              value={signup.username}
              name="username"
              className="border h-11 rounded-lg w-4/5 bg-black/45 border-stone-600 border-solid pl-8"
            />
            <img
              src="src/assets/user.png"
              className="absolute h-[15px]  top-4 left-3"
              alt=""
            />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="youremail@example.com"
              required
              onChange={signupChange}
              value={signup.email}
              name="email"
              className="border h-11 rounded-lg w-4/5 bg-black/45 border-stone-600 border-solid pl-8"
            />

            <img
              src="src/assets/mail.png"
              className="absolute h-[15px]  top-4 left-3"
              alt=""
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="*****************"
              required
              onChange={signupChange}
              value={signup.password}
              name="password"
              className="border h-11 rounded-lg w-4/5 bg-black/45 border-stone-600 border-solid pl-8"
            />
            <img
              src="src/assets/key.png"
              className="absolute h-[15px]  top-4 left-3"
              alt=""
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              placeholder="123-456-7890"
              required
              onChange={signupChange}
              value={signup.tel}
              name="tel"
              className="border h-11 rounded-lg w-4/5 bg-black/45 border-stone-600 border-solid pl-8"
            />
            <img
              src="src/assets/key.png"
              className="absolute h-[15px]  top-4 left-3"
              alt=""
            />
          </div>
          <div id="gender" className="flex gap-5">
            <div>
              <input
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={signup.gender === "Female"}
                onChange={signupChange}
              />
              <label htmlFor="female" className="ml-1">
                Female
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={signup.gender === "Male"}
                onChange={signupChange}
              />
              <label htmlFor="male" className="ml-1">
                Male
              </label>
            </div>
          </div>
          <button
            onClick={signupSubmit}
            className="bg-blue-600 w-4/5  py-2 rounded-lg"
          >
            Create my account
          </button>
        </form>
        <p className="ml-10 text-stone-500 font-normal">
          Already have an account?{" "}
          <button
            onClick={() => {
              setSignUpModal(false);
            }}
            className="text-blue-500 font-medium p-1"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
