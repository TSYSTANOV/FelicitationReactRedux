import { Container } from "../Container/Container";
import styles from "./footer.module.css";
import { ReactComponent as VKItem } from "../../img/vk.svg";
import { ReactComponent as TGItem } from "../../img/tg.svg";
import { ReactComponent as PinterestItem } from "../../img/pinterest.svg";
import { ReactComponent as StumbleItem } from "../../img/stumbleupon.svg";
function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.contacts}>
            <p>Design: Anastasisa Ilina</p>
            <p>Coder:</p>
            <p>TS_Group, 2024</p>
          </div>
          <ul className={styles.social}>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                <VKItem />
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                <TGItem />
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                <PinterestItem />
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                <StumbleItem />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
export { Footer };
