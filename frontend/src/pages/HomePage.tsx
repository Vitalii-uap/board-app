import Button from "../components/Button";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.emoji}>📦</div>
      <h1 className={styles.title}>Give away your stuff for free!</h1>
      <p className={styles.subtitle}>
        Find a new home for things you no longer need.
      </p>
      <div className={styles.steps}>
        <div>📝 Step 1: Register</div>
        <div>📸 Step 2: Add ad</div>
        <div>📞 Step 3: Wait for contact</div>
      </div>
      <p className={styles.info}>Only registered users can create ads.</p>
      <div className={styles.buttons}>
        <Button>Create Account</Button>
        <Button onClick={() => navigate("/adslist")}>View Ads List</Button>
      </div>
      <footer className={styles.footer}>
        Made by{" "}
        <a
          href="https://github.com/Vitalii-uap"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vitalii
        </a>{" "}
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
