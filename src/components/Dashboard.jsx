import React, { useContext } from "react";
import GenCard from "./GenCard";
import { CardsContext } from "../context/Cards";

function Dashboard() {
  const { loading, allCards, error, mapData} =
    useContext(CardsContext);
  return (
    <div className="text-white">
      {loading && (
        <h1 className="font-bold text-3xl text-purple-300">Loading...</h1>
      )}
      {error && (
        <div className="font-bold text-3xl text-purple-300">
          <p>Sorry!! Something went wrong</p>
          <p>
            <span className="text-red-500">Error: {error?.massage}</span>
          </p>
        </div>
      )}
      <div className="flex flex-col gap-1">
        {allCards &&
          mapData.map((card) => <GenCard key={card.id} card={card} />)}
      </div>
    </div>
  );
}

export default Dashboard;
