import { createContext, useState } from "react";
import { useHolidays } from "../hooks/useHolidays";

export const holidayContent = createContext({});
export const HolidayContext = ({ children }) => {
    const [holiday, setHoliday] = useState('')
    const [holidays] = useHolidays()
    function changeHoliday(title) {
      setHoliday(title);
    }

  return (
    <holidayContent.Provider value={{holiday, holidays, changeHoliday}}>
      {children}
    </holidayContent.Provider>
  );
};
