import { createContext, useContext, useState } from "react";
import { useText } from "../hooks/useText";
import { holidayContent } from "./holidayContext";
export const textContent = createContext({});
export const TextContext = ({ children }) => {
  const {holiday} = useContext(holidayContent)
  const [text] = useText(holiday)
  return (
    <textContent.Provider value={ text }>
      {children}
    </textContent.Provider>
  );
};
