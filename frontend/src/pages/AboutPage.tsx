import styles from "./AboutPage.module.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Our Community</h1>

        <p className={styles.intro}>
          Welcome to a simple, local place where people give away things they no
          longer need — completely for free.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p>
            We believe that one person's "I don't need this anymore" can become
            another person's "exactly what I was looking for". By sharing unused
            items we reduce waste, help each other, and make our neighborhoods a
            little bit nicer and greener.
          </p>
          <p>
            No money, no selling, no strings attached — just neighbors helping
            neighbors.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <ul className={styles.list}>
            <li>
              Post items you're happy to give away (with photos and honest
              description)
            </li>
            <li>People who need them write "I want this!" or message you</li>
            <li>
              You agree on pickup time & place (usually porch / curb / public
              spot)
            </li>
            <li>The item finds a new home — everyone is happy ♻️</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why We Exist</h2>
          <p>
            Inspired by communities like Freecycle, Buy Nothing Project and
            TrashNothing. We wanted a clean, modern, and fast platform focused
            only on free giveaways — without ads, without complexity.
          </p>
          <p>Every item saved from landfill is a small win for the planet.</p>
        </section>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Ready to join the movement?</p>
          <div className={styles.buttons}>
            <Link to="/add" className={styles.linkWrapper}>
              <Button variant="primary" size="lg">
                Give Something Away →
              </Button>
            </Link>

            <Link to="/adslist" className={styles.linkWrapper}>
              <Button variant="outline" size="lg">
                Browse Free Stuff
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
