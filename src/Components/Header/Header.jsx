import styles from "./header.module.css";
import { Container } from "../Container/Container";
import { Choose } from "./choices/Choose";
function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.buttons}>
            <button className={styles.button}>Поменять поздравление</button>
            <button className={styles.button}>Поменять фон</button>
            <Choose />
          </div>
        </div>
      </Container>
    </header>
  );
}
export { Header };
