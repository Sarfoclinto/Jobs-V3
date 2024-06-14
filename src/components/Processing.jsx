import React, { useContext } from "react";
import { CardsContext } from "../context/Cards";
import GenCard from "./GenCard";

function Processing() {
  const { processingCards } = useContext(CardsContext);
  return (
    <div className="text-white flex flex-col gap-1">
      {processingCards.length ? (
        processingCards.map((card) => {
          return <GenCard key={card.id} card={card} />;
        })
      ) : (
        <h1 className="text-3cl font-bold text-purple-300">
          No processing card
        </h1>
      )}
    </div>
  );
}

export default Processing;
