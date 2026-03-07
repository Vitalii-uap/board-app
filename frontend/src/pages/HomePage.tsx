import Button from "../components/Button";
import styles from "./HomePage.module.css";
import { useNavigate, Link } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {/* Фонова картинка */}
      <div className={styles.background} />

      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Give away your stuff for free!</h1>

          <p className={styles.subtitle}>
            Find a new home for things you no longer need.
          </p>

          <div className={styles.registerBox}>
            <h3 className={styles.registerTitle}>Register on the platform</h3>

            <div className={styles.formFields}>
              <input type="text" placeholder="Name" className={styles.input} />
              <input
                type="text"
                placeholder="Phone number"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="E-mail (example@domain.com)"
                className={styles.input}
              />
            </div>

            <Button
              className={styles.registerBtn}
              onClick={() => navigate("/register")}
            >
              Register
            </Button>

            <p className={styles.already}>
              Already registered? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>

        <div className={styles.directions}>
          <h2 className={styles.directionsTitle}>Categories</h2>

          <div className={styles.cards}>
            <div className={styles.card}>Furniture</div>
            <div className={styles.card}>Home & kitchen</div>
            <div className={styles.card}>Clothing & accessories</div>
            <div className={styles.card}>Baby & kids</div>
            <div className={styles.card}>Electronics</div>
            <div className={styles.card}>Books & media</div>
            <div className={styles.card}>Sports & outdoors</div>
            <div className={styles.card}>Toys & games</div>
            <div className={styles.card}>Garden & plants</div>
            <div className={styles.card}>Health & beauty</div>
            <div className={styles.card}>Tools & DIY</div>
            <div className={styles.card}>Other</div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} — Made with ❤️ by{" "}
        <a
          href="https://github.com/Vitalii-uap"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vitalii
        </a>
      </footer>
    </div>
  );
}
