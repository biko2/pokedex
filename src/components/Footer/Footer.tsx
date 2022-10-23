import styles from "./Footer.module.css";
import githubLogo from "assets/images/github-logo.svg";
import pokeapiLogo from "assets/images/pokeapi-logo.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={githubLogo} alt="Github logo" />
      <img src={pokeapiLogo} alt="PokeApi logo" />
    </footer>
  );
};
