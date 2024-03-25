import React, { useState, createContext, useEffect } from "react";
import { cfg } from "../cfg/cfg";
// import { json } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState([]);

  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  const [favoriteData, setFavoriteData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${cfg.API.HOST}/product`);

        const products = await response.json();

        const filteredData = products.filter(
          (item) => !cartData.some((cartItem) => cartItem.title === item.title)
        );
        setData(filteredData);
      } catch (error) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    localStorage.setItem("favoriteData", JSON.stringify(favoriteData));
  }, [favoriteData]);

  const handleAddToCard = (item) => {
    setCartData([...cartData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setData(filteredData);
    localStorage.setItem("data", JSON.stringify(filteredData));
  };

  const handleRemoveFromCard = (item) => {
    setData([item, ...data]);
    localStorage.setItem("data", JSON.stringify([item, ...data]));

    const filteredCardData = cartData.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setCartData(filteredCardData);
  };

  const handleAddToFavorite = (item) => {
    setFavoriteData([...favoriteData, item]);
  };

  const handleRemoveFromFavorite = (item) => {
    const filteredFavoriteData = favoriteData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setFavoriteData(filteredFavoriteData);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        cartData,
        setCartData,
        favoriteData,
        setFavoriteData,
        handleRemoveFromFavorite,
        handleAddToCard,
        handleAddToFavorite,
        handleRemoveFromCard,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
