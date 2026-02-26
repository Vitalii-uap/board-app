import styles from "./Empty.module.css";

type EmptyProps = {
  children: React.ReactNode;
};

export default function Empty({ children }: EmptyProps) {
  return (
    <div className={styles.container}>
      <div className={styles.emoji}>😔</div>
      <p className={styles.subtitle}>{children}</p>
    </div>
  );
}
