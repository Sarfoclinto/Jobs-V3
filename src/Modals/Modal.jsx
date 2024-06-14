import React from "react";

function Modal({ closemodal, openmodal, children }) {
  return (
    <div id="overlay" className="fixed top-0 left-0 right-0 bottom-0">
      {openmodal && (
        <div className="relative w-full h-[600px] bg-purple-300/5 flex items-center justify-center">
          <button
            onClick={closemodal}
            className="absolute bg-red-500 px-3 py-1 rounded-full right-3 top-2 font-extrabold "
          >
            &times;
          </button>
          {children}
        </div>
      )}
    </div>
  );
}

export default Modal;
