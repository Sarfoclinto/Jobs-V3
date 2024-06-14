import React from "react";

function SignUpModal({ open, children, closemodal }) {
  return (
    open && (
      <div
        id="sigup"
        className="absolute top-0 bottom-0 right-0 left-0 bg-sky-900/45 z-50 flex items-center justify-center"
      >
        <button
          onClick={() => {
            closemodal(false);
          }}
          className="border px-3 py1 rounded-full bg-emerald-600 font-extrabold text-xl text-black absolute top-3 right-3"
        >
          &times;
        </button>
        {children}
      </div>
    )
  );
}

export default SignUpModal;
