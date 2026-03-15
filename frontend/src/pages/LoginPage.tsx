import Button from "../components/Button";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // додав для "Forgot password" та "Register"

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Тут буде логіка авторизації пізніше
    // navigate("/"); // наприклад, після успішного логіну
    alert("Login functionality coming soon!"); // тимчасово
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>
          Login to start giving and finding free stuff in your community
        </p>

        <div className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email address"
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            required
          />

          <div className={styles.forgot}>
            <Link to="/forgot-password" className={styles.forgotLink}>
              Forgot password?
            </Link>
          </div>

          <div className={styles.buttons}>
            <Button variant="primary" size="lg" onClick={handleLogin}>
              Log In
            </Button>
          </div>

          <p className={styles.registerPrompt}>
            Don't have an account?{" "}
            <Link to="/register" className={styles.registerLink}>
              Create one — it's free!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
