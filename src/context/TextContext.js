import { createContext, useContext } from "react";
import { useText } from "../hooks/useText";
import { holidayContent } from "./holidayContext";
import { useFetch } from "../hooks/useFetch";
import { URI_API } from "../const/const";
import { useSelector } from "react-redux";
export const textContent = createContext({});
export const TextContext = ({ children }) => {
  // const { holiday } = useContext(holidayContent);
  const holiday = useSelector((state) => state.holiday.holiday);
  const { text } = useFetch(holiday ? URI_API + "text/" + holiday : "");
  return (
    <textContent.Provider
      value={text ? text : "Выберите повод для поздравления"}
    >
      {children}
    </textContent.Provider>
  );
};
