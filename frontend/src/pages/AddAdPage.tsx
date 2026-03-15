import { useState } from "react";
import styles from "./AddAdPage.module.css";
import Button from "../components/Button";

const CATEGORIES = [
  { value: "furniture", label: "Furniture" },
  { value: "home & kitchen", label: "Home & Kitchen" },
  { value: "clothing & accessories", label: "Clothing & Accessories" },
  { value: "baby & kids", label: "Baby & Kids" },
  { value: "toys & games", label: "Toys & Games" },
  { value: "electronics", label: "Electronics" },
  { value: "books & media", label: "Books & Media" },
  { value: "sports & outdoors", label: "Sports & Outdoors" },
  { value: "appliances", label: "Appliances" },
  { value: "garden & plants", label: "Garden & Plants" },
  { value: "pet supplies", label: "Pet Supplies" },
  { value: "tools & diy", label: "Tools & DIY" },
  { value: "other", label: "Other" },
];

export default function AddAdPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !category || !imageUrl) {
      alert("Please fill in all required fields");
      return;
    }

    const newAd = {
      title,
      description,
      category,
      images: [imageUrl.trim()],
      status: "active",
      user: "TEMP_USER_ID", // ← заміни на реальний user з auth
    };

    console.log("New ad:", newAd);
    // TODO: await axios.post('/api/ads', newAd);
    // navigate('/success') або показати тост "Ad published!"

    // Тимчасовий ресет форми
    setTitle("");
    setDescription("");
    setCategory("");
    setImageUrl("");
    alert("Ad published! (mock)");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Give Something Away</h1>
        <p className={styles.subtitle}>
          Share your unused items with the community — someone will be happy to
          pick them up!
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>Title *</label>
            <input
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. IKEA chair in good condition"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Description</label>
            <textarea
              className={styles.textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the item: condition, size, why you're giving it away..."
              rows={5}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Category *</label>
            <select
              className={styles.select}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Image URL *</label>
            <input
              className={styles.input}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              required
            />
            <p className={styles.hint}>
              For now paste a direct image link (later we'll add file upload)
            </p>
          </div>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" type="submit">
              Publish Giveaway
            </Button>
            <Button
              variant="outline"
              size="md"
              type="button"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
