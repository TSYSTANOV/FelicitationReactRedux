import { useContext, useEffect, useState } from "react";
import styles from "./choises.module.css";
import { holidayContent } from "../../../context/holidayContext";
import { useSelector, useDispatch } from "react-redux";
import { setHoliday } from "../../../redux/HolidaysSlice";
import { fetchHolidays } from "../../../redux/HolidaysSlice";
import { fetchText } from "../../../redux/TextSlice";
import { fetchImage } from "../../../redux/ImageSlice";
function Choose() {
  const [isOpenChoises, setIsOpenChoises] = useState(false);
  // const {holiday, holidays, changeHoliday} = useContext(holidayContent)
  const dispatch = useDispatch();
  const { holiday, holidays, loading } = useSelector((state) => state.holiday);
  function toggleChoises() {
    if (loading !== "success") return;
    setIsOpenChoises(!isOpenChoises);
  }
  useEffect(() => {
    dispatch(fetchHolidays());
  }, []);
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggleChoises}>
        {loading !== "success"
          ? "Загрузка"
          : holidays[holiday] || "Выберите праздник"}
      </button>
      {isOpenChoises && (
        <ul className={styles.list}>
          {Object.entries(holidays).map((item) => {
            return (
              <li
                className={styles.item}
                key={item[0]}
                onClick={() => {
                  dispatch(setHoliday(item[0]));
                  dispatch(fetchText(item[0]));
                  dispatch(fetchImage(item[0]));
                  toggleChoises();
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
