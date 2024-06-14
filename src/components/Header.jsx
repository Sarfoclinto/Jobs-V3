import React, { useContext, useState } from "react";
import { UserContext } from "../context/Users";
import { CardsContext } from "../context/Cards";

function Header() {
  const { currentUser } = useContext(UserContext);
  const { allCards, mapData, setMapData } = useContext(CardsContext);
  const [activetab, setactivetab] = useState({
    all: true,
    give: null,
    take: null,
  });
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(today);

  return (
    <header className="  flex justify-between items-center ">
      <div id="profile" className="p-1 ">
        <h1 className="font-bold font-sans text-purple-200 text-2xl">
          Hello, {currentUser?.first_name}
        </h1>
        <p className="text-slate-500 font-medium ">{formattedDate}</p>
      </div>
      <div id="midpoint" className=" w-2/5">
        <ul className="w-full min-h-fit flex justify-between   ">
          <li>
            <button
              onClick={() => {
                setactivetab({
                  all: true,
                  give: false,
                  take: false,
                });
                setMapData((prev) => {
                  return allCards.filter((card) => {
                    return (
                      card.field === "give-out" || card.field === "take-in"
                    );
                  });
                });
              }}
              className="text-purple-200 text-lg font-semibold hover:text-black hover:cursor-pointer border rounded-md  border-none px-10 my-shadow shadow-white"
              style={{
                backgroundColor: activetab.all ? "#011222" : "",
                color: activetab.all ? "black" : "",
              }}
            >
              All
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setactivetab({
                  all: false,
                  give: true,
                  take: false,
                });
                setMapData((prev) => {
                  return allCards.filter((card) => {
                    return card.field === "give-out";
                  });
                });
              }}
              className="text-purple-200 text-lg font-semibold hover:text-black hover:cursor-pointer border rounded-md  border-none px-10 my-shadow shadow-white"
              style={{
                backgroundColor: activetab.give ? "#011222" : "",
                color: activetab.give ? "black" : "",
              }}
            >
              Give-Outs
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setactivetab({
                  all: false,
                  give: false,
                  take: true,
                });
                setMapData((prev) => {
                  return allCards.filter((card) => {
                    return card.field === "take-in";
                  });
                });
              }}
              className="text-purple-200 text-lg font-semibold hover:text-black hover:cursor-pointer border rounded-md border-none px-10 my-shadow shadow-white"
              style={{
                backgroundColor: activetab.take ? "#011222" : "",
                color: activetab.take ? "black" : "",
              }}
            >
              Take-Ins
            </button>
          </li>
        </ul>
      </div>
      <div id="nav" className=" p-1 flex items-center gap-3">
        <div className="bg-slate-500 w-fit h-fit p-2 rounded-lg cursor-pointer">
          <img src="/src/assets/search.png" alt="" className="w-[15px]" />
        </div>
        <button className="bg-black text-white px-4 py-1 rounded-lg text-md">
          Add New Project
        </button>
      </div>
    </header>
  );
}

export default Header;
