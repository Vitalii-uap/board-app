import { Link } from "react-router-dom";
import styles from "./AdCard.module.css";
import type { Ad } from "../types/ad";

export default function AdCard({ ad }: { ad: Ad }) {
  return (
    <Link to={`/ads/${ad._id}`} className={styles.card}>
      <img src={ad.images[0]} alt={ad.title} className={styles.image} />
      <div className={styles.content}>
        <h3>{ad.title}</h3>
        <p className={styles.category}>{ad.category}</p>
        <p className={styles.description}>{ad.description.slice(0, 80)}...</p>
        <div className={styles.user}>
          <span>{ad.user.username}</span>
          <span>{ad.user.phone}</span>
        </div>
      </div>
    </Link>
  );
}
