import { useContext, useEffect, useState } from "react";
import styles from "./choises.module.css";
import { holidayContent } from "../../../context/holidayContext";

function Choose() {
  const [isOpenChoises, setIsOpenChoises] = useState(false);;
  const {holiday, holidays, changeHoliday} = useContext(holidayContent)
  function toggleChoises() {
    setIsOpenChoises(!isOpenChoises);
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggleChoises}>
        {holidays[holiday] || 'Выберите праздник'}
      </button>
      {isOpenChoises && (
        <ul className={styles.list}>
          {Object.entries(holidays).map((item) => {
            return (
              <li
                className={styles.item}
                key={item[0]}
                onClick={() => {
                  changeHoliday(item[0]);
                  toggleChoises()
                }}
              >
                {item[1]}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export { Choose };
