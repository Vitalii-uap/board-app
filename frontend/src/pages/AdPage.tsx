import { useParams } from "react-router-dom";
import { mockAds } from "../data/mockAds";
import Empty from "../components/Empty";
import styles from "./AdPage.module.css";
import { formatDateTime } from "../utils/formatDate";
import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

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
        {/* Лівий блок — галерея */}
        <div className={styles.gallerySection}>
          <div className={styles.gallery}>
            {ad.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className={styles.navBtn}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className={styles.navBtn}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            <img
              src={ad.images[index]}
              alt={ad.title}
              className={styles.mainImage}
            />

            {ad.images.length > 1 && (
              <div className={styles.thumbnails}>
                {ad.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`${styles.thumb} ${i === index ? styles.activeThumb : ""}`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Правий блок — інформація */}
        <div className={styles.infoSection}>
          <div className={styles.card}>
            <div className={styles.header}>
              <h1 className={styles.title}>{ad.title}</h1>
              <span className={styles.category}>
                {ad.category.replace("&", " & ")}
              </span>
            </div>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                Posted on {date} at {time}
              </span>
              <span className={styles.metaItem}>by {ad.user.username}</span>
            </div>

            <p className={styles.description}>{ad.description}</p>

            <div className={styles.contact}>
              <h3 className={styles.contactTitle}>Get in touch</h3>
              <div className={styles.contactRow}>
                <span className={styles.icon}>📞</span>
                <span>{ad.user.phone}</span>
              </div>
              {/* Якщо буде email — можна додати */}
              {/* <div className={styles.contactRow}>
                <span className={styles.icon}>✉️</span>
                <span>{ad.user.email}</span>
              </div> */}
            </div>

            <div className={styles.actions}>
              <Button variant="primary" size="lg">
                I want this! →
              </Button>
              <Button variant="outline" size="md">
                Message poster
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
