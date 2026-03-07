import styles from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
// import { useAuth } from ... (якщо є контекст авторизації)

export default function Navigation() {
  // const { isLoggedIn, user } = useAuth();   // ← підключи свою логіку
  const isLoggedIn = false; // тимчасово

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Ліва частина — логотип + меню */}
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            FreePick<span>.biz</span>
          </Link>

          <nav className={styles.nav}>
            <NavLink
              to="/adslist"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Free Stuff
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Post Free
            </NavLink>
            <NavLink
              to="/knowledge-base"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              About
            </NavLink>
            <NavLink
              to="/rules"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Rules
            </NavLink>
          </nav>
        </div>

        {/* Права частина — пошук + авторизація */}
        <div className={styles.right}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Find free stuff..."
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>Find</button>
          </div>

          <div className={styles.auth}>
            {isLoggedIn ? (
              <Link to="/account" className={styles.accountLink}>
                Account
              </Link>
            ) : (
              <>
                <Link to="/login" className={styles.loginBtn}>
                  Login
                </Link>
                <Link to="/register" className={styles.registerBtn}>
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Можна додати перемикач мови */}
          {/* <div className={styles.lang}>
            <button className={styles.langBtn}>Укр</button>
            <button className={styles.langBtn}>Eng</button>
          </div> */}
        </div>
      </div>
    </header>
  );
}
