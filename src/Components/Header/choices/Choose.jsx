import { useState } from "react";
import styles from "./choises.module.css";
const holidayList = {
  newyear: "Новый год",
  birthdayWomen: "День рождения  Ж",
  birthdayMen: "День рождения  М",
  womenDay: "8 марта",
  knowladgeDay: "День знаний",
};
function Choose() {
  const [isOpenChoises, setIsOpenChoises] = useState(false);
  const [holiday, setHoliday] = useState("Выбрать праздник");
  function toggleChoises() {
    setIsOpenChoises(!isOpenChoises);
  }
  function changeHoliday(title) {
    setHoliday(title);
    toggleChoises();
  }
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggleChoises}>
        {holiday}
      </button>
      {isOpenChoises && (
        <ul className={styles.list}>
          {Object.entries(holidayList).map((item) => {
            return (
              <li
                className={styles.item}
                key={item[0]}
                onClick={() => {
                  changeHoliday(item[1]);
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
