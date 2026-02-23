import { useEffect, useState } from "react";
import type { Ad } from "../types/ad";
import styles from "./AdsList.module.css";
import AdCard from "../components/AdCard";
import Button from "../components/Button";

export default function AdsList() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    fetch("http://localhost:5001/api/ads")
      .then((res) => res.json())
      .then((data) => setAds(data))
      .catch((err) => console.error(err));
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAds = ads.slice(startIndex, endIndex);
  const totalPages = Math.ceil(ads.length / ITEMS_PER_PAGE);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {currentAds.map((ad) => (
          <AdCard key={ad._id} ad={ad} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
