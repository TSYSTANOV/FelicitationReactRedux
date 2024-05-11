import { createContext, useState } from "react";
import { useHolidays } from "../hooks/useHolidays";
import { useFetch } from "../hooks/useFetch";
import { URI_API } from "../const/const";
export const holidayContent = createContext({});
export const HolidayContext = ({ children }) => {
  const [holiday, setHoliday] = useState("");
  const holidays = useFetch(URI_API);
  function changeHoliday(title) {
    setHoliday(title);
  }

  return (
    <holidayContent.Provider value={{ holiday, holidays, changeHoliday }}>
      {children}
    </holidayContent.Provider>
  );
};
