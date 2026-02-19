import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  const isLoggedIn = false; // CHANGE

  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/adslist">
        Ads List
      </Link>
      <Link className={styles.link} to="/add">
        Add Ad
      </Link>

      <div className={styles.spacer} />

      {isLoggedIn ? (
        <Link className={styles.account} to="/account">
          My Account
        </Link>
      ) : (
        <Link className={styles.account} to="/login">
          Sing in
        </Link>
      )}
    </nav>
  );
}
