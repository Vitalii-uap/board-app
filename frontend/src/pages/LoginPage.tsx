import Button from "../components/Button";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Login or create an account</h1>

        <input className={styles.input} placeholder="Email" />
        <input
          className={styles.input}
          placeholder="Password"
          type="password"
        />

        <div className={styles.buttons}>
          <Button>Login</Button>
          <Button>Create account</Button>
        </div>
      </div>
    </div>
  );
}
