import { useParams } from "react-router-dom";
import { mockAds } from "../data/mockAds";
import Empty from "../components/Empty";
import styles from "./AdPage.module.css";
import { formatDateTime } from "../utils/formatDate";
import { useState } from "react";

export default function AdPage() {
  const [index, setIndex] = useState(0);
  const { id } = useParams();
  const ad = mockAds.find((item) => item._id === id);

  if (!ad) return <Empty>Ad not found</Empty>;

  const { date, time } = formatDateTime(ad.createdAt);

  const prev = () => setIndex((i) => (i === 0 ? ad.images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === ad.images.length - 1 ? 0 : i + 1));

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.gallery}>
          <button onClick={prev} className={styles.navBtn}>
            ‹
          </button>
          <img
            src={ad.images[index]}
            alt={ad.title}
            className={styles.mainImage}
          />
          <button onClick={next} className={styles.navBtn}>
            ›
          </button>
        </div>
        <div className={styles.details}>
          <p className={styles.description}>{ad.description}</p>

          <div className={styles.contact}>
            <div>👤 {ad.user.username}</div>
            <div>📞 {ad.user.phone}</div>
          </div>

          <div className={styles.date}>
            Added {date} at {time}
          </div>
        </div>
      </div>
    </div>
  );
}
