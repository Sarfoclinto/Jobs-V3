import React, { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalContextProvider(props) {
  const [signUpModal, setSignUpModal] = useState(false);

  const [modal, setModal] = useState({
    active: false,
    mode: "signup",
  });
  const closemodal = () => {
    setModal((prev) => {
      return {
        ...prev,
        active: false,
      };
    });
  };
  return (
    <ModalContext.Provider
      value={{ closemodal, modal, setModal, setSignUpModal, signUpModal }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
