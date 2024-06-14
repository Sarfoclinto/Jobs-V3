import React, { createContext, useState, useEffect } from "react";

export const CardsContext = createContext();

function CardsContextProvider(props) {
  const [allCards, setAllCards] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [onecard, setOneCard] = useState(null);
  const [mapData, setMapData] = useState(null);

  const [processingCards, setProcessingCards] = useState(
    JSON.parse(localStorage.getItem("processing")) || []
  );

  useEffect(() => {
    localStorage.setItem("processing", JSON.stringify(processingCards));
  }, [processingCards]);

  useEffect(() => {
    fetch("http://localhost:8001/all")
      .then((res) => {
        if (!res) {
          throw Error("Response not found");
        }
        return res.json();
      })
      .then((data) => {
        setAllCards(data);
        setMapData(data);
        setOneCard(data[0]);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("Error: ", err.message);
      });
  }, []);
  return (
    <CardsContext.Provider
      value={{
        allCards,
        setAllCards,
        loading,
        setLoading,
        error,
        setError,
        onecard,
        processingCards,
        setProcessingCards,
        mapData,
        setMapData,
      }}
    >
      {props.children}
    </CardsContext.Provider>
  );
}

export default CardsContextProvider;
