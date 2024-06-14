import React, { useContext, useState } from "react";
import { CardsContext } from "../context/Cards";

function GenCard({ card }) {
  const { setProcessingCards, allCards, processingCards } =
    useContext(CardsContext);
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };
  const addCard = (id) => {
    const card = allCards.find((card) => card.id === id);
    setProcessingCards((prev) => {
      return [...prev, card];
    });
  };
  return (
    <div
      id="card"
      className=" hover:shadow-none p-2 active-tab flex relative items-center gap-3 rounded-lg my-shadow"
    >
      {window.location.pathname === "/main/dashboard" && (
        <img
          src={active ? `/src/assets/like-filled.png` : `/src/assets/like.png`}
          aria-disabled={!active}
          alt=""
          onClick={() => {
            toggleActive();
            addCard(card.id);
          }}
          className="absolute top-1 right-1"
        />
      )}
      <div id="cardImage" className="flex items-center">
        <img
          className="w-[150px] logo h-[130px] rounded-lg"
          src={`/src/assets/${card?.img}.png`}
          alt=""
        />
      </div>
      <div id="cardText" className="flex flex-col justify-between h-inherit ">
        <h3 id="textCategory" className="text-lg capitalize font-medium">
          <span className="font-semibold text-purple-300 ">Field: </span>
          {card?.field === "give-out" ? "Giving out" : "Take-In"}
        </h3>
        <p id="textDescription" className="text-pretty">
          <span className="font-semibold text-purple-300 ">Description: </span>
          {card?.description}
        </p>
        <div id="textSkills" className=" flex">
          <span className="font-semibold text-purple-300 ">Skills: </span>
          {card.skillrequired
            ? card.skillrequired.map((skill) => {
                return (
                  <p className="w-fit px-3 text-purple-600 font-medium">
                    {skill}
                  </p>
                );
              })
            : card?.skillExperience
            ? card.skillExperience.map((skill) => {
                return (
                  <p className="w-fit px-3 text-purple-600 font-medium">
                    {skill}
                  </p>
                );
              })
            : "Skill/Experience not specified"}
        </div>
        <div id="textContact" className="flex gap-5 mt-2">
          <a href={`https://wa.me/${card?.phone}`}>
            <button className="flex gap-1 border p-1 items-center border-purple-800 border-solid hover:border-purple-300 rounded-lg ">
              <img
                src="/src/assets/whatsColored.png"
                alt=""
                className="w-[30px] h-[30px] logo rounded-full "
              />
              <p>WhatsApp</p>
            </button>
          </a>

          <a href={`tel:${card?.phone}`}>
            <button className="flex gap-1 border p-1 items-center border-purple-800 border-solid hover:border-purple-300 rounded-lg ">
              <img
                src="/src/assets/phone-2.png"
                alt=""
                className="w-[30px] h-[30px] logo rounded-full"
              />
              <p>Phone</p>
            </button>
          </a>

          <a href={`mailto:${card?.email}`}>
            <button className="flex gap-1 border p-1 items-center border-purple-800 border-solid hover:border-purple-300 rounded-lg ">
              <img
                src="/src/assets/mail.png"
                alt=""
                className="w-[30px] h-[30px] logo rounded-full"
              />
              <p>Email</p>
            </button>
          </a>

          <a href={`sms:${card?.phone}?body=Hello%20there!`}>
            <button className="flex gap-1 border p-1 items-center border-purple-800 border-solid hover:border-purple-300 rounded-lg ">
              <img
                src="/src/assets/sms.png"
                alt=""
                className="w-[30px] h-[30px] logo rounded-full"
              />
              <p>Sms</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GenCard;
