import { useEffect, useState } from "react";
import type { Ad } from "../types/ad";
import styles from "./AdsList.module.css";
import AdCard from "../components/AdCard";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import Empty from "../components/Empty";

import { mockAds } from "../data/mockAds";

export default function AdsList() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const ITEMS_PER_PAGE = 10;

  // useEffect(() => {
  //   const fetchAds = async () => {
  //     try {
  //       setLoading(true);

  //       const res = await fetch("http://localhost:5001/api/ads");
  //       const data = await res.json();

  //       setAds(data);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchAds();
  // }, []);

  useEffect(() => {
    setAds(mockAds);
    setLoading(false);
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAds = ads.slice(startIndex, endIndex);
  const totalPages = Math.ceil(ads.length / ITEMS_PER_PAGE);

  if (loading) return <Spinner />;
  if (ads.length === 0) return <Empty />;
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
