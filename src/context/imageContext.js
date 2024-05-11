import { createContext, useContext, useState } from "react";
import { holidayContent } from "./holidayContext";
import { useImage } from "../hooks/useImage";
import { useFetch } from "../hooks/useFetch";
import { URI_API } from "../const/const";
import { useSelector } from "react-redux";

export const imageContext = createContext({});
export const ImageContext = ({ children }) => {
  // const { holiday } = useContext(holidayContent);
  const holiday = useSelector((state) => state.holiday.holiday);
  const image = useFetch(holiday ? URI_API + "image/" + holiday : "");

  // useImage(holiday);

  return (
    <imageContext.Provider value={image}>{children}</imageContext.Provider>
  );
};
