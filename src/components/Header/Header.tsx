import logo from "assets/images/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.content}>
        <img src={logo} alt="Pokedex logo" />
        <h1 className={styles.title}>My Pokedex</h1>
      </nav>
    </header>
  );
};
