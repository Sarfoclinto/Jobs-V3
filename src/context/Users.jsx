import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UsersContextProvider(props) {
  const [allExistingUsers, setAllExistingUsers] = useState(null);
  const [signedup, setSignedup] = useState(false);

  const [logins, setLogins] = useState({
    email: "",
    password: "",
  });

  const [signup, setSignup] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    gender: "",
    password: "",
    tel: "",
    img: "",
  });

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("currentUser")) || {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      password: "",
    }
  );
  useEffect(() => {
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") || false
  );

  const loginChange = (event) => {
    const { name, value } = event.target;
    setLogins((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        if (!res) {
          throw Error("Response not found");
        }
        return res.json();
      })
      .then((data) => setAllExistingUsers(data))
      .catch((err) => {
        console.log(err);
      });
  }, [signedup]);
  return (
    <UserContext.Provider
      value={{
        logins,
        setLogins,
        loginChange,
        allExistingUsers,
        setAllExistingUsers,
        setCurrentUser,
        isAuthenticated,
        setIsAuthenticated,
        signup,
        setSignup,
        currentUser,
        setSignedup,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UsersContextProvider;
