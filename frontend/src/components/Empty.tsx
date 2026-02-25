import styles from "./Empty.module.css";

export default function Empty() {
  return (
    <div className={styles.container}>
      <div className={styles.emoji}>😔</div>
      <p className={styles.subtitle}>No ads yet 💤</p>
    </div>
  );
}
