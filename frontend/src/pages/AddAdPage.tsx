import { useState } from "react";
import styles from "./AddAdPage.module.css";
import Button from "../components/Button";

export default function AddAdPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAd = {
      title,
      description,
      category,
      images: [imageUrl],
      status: "active",
      user: "TEMP_USER_ID",
    };

    console.log(newAd);
    // TODO: POST to API
  };

  return (
    <div className={styles.page}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Create new ad</h1>

        <label className={styles.label}>Title</label>
        <input
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className={styles.label}>Description</label>
        <textarea
          className={styles.textarea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className={styles.label}>Category</label>
        <select
          className={styles.input}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="toys">Toys</option>
          <option value="furniture">Furniture</option>
          <option value="sport">Sport</option>
        </select>

        <label className={styles.label}>Image URL</label>
        <input
          className={styles.input}
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <Button type="submit">Publish</Button>
      </form>
    </div>
  );
}
