import { useParams } from "react-router-dom";
import { mockAds } from "../data/mockAds";
import Empty from "../components/Empty";
import styles from "./AdPage.module.css";
import { formatDateTime } from "../utils/formatDate";
import { useState } from "react";

export default function AdPage() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);

  const ad = mockAds.find((item) => item._id === id);
  if (!ad) return <Empty>Ad not found</Empty>;

  const { date, time } = formatDateTime(ad.createdAt);

  const prev = () => setIndex((i) => (i === 0 ? ad.images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === ad.images.length - 1 ? 0 : i + 1));

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        {/* LEFT — Gallery */}
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

        {/* RIGHT — Info Card */}
        <div className={styles.card}>
          <div className={styles.topInfo}>
            <div className={styles.header}>
              <h1 className={styles.title}>{ad.title}</h1>
              <span className={styles.category}>{ad.category}</span>
            </div>

            <p className={styles.description}>{ad.description}</p>
          </div>

          <div className={styles.bottomInfo}>
            <div className={styles.divider} />

            <div className={styles.contactBox}>
              <div className={styles.userRow}>
                <span className={styles.icon}>👤</span>
                <span>{ad.user.username}</span>
              </div>

              <div className={styles.userRow}>
                <span className={styles.icon}>📞</span>
                <span>{ad.user.phone}</span>
              </div>
            </div>

            <div className={styles.date}>
              Posted {date} at {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
