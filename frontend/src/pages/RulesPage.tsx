import styles from "./RulesPage.module.css";

export default function RulesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Community Rules</h1>

        <p className={styles.intro}>
          We keep things simple so everyone feels safe and welcome. Please
          follow these few guidelines — they help our community stay friendly
          and functional.
        </p>

        <div className={styles.rulesList}>
          <div className={styles.rule}>
            <h3 className={styles.ruleTitle}>
              1. Everything must be 100% free
            </h3>
            <p>
              No selling, no trading for other items, no "tips", no hidden fees.
              Pure giveaways only.
            </p>
          </div>

          <div className={styles.rule}>
            <h3 className={styles.ruleTitle}>
              2. Items must be legal and safe
            </h3>
            <p>
              Nothing illegal, dangerous, expired (food/medicines), or
              inappropriate for all ages.
            </p>
          </div>

          <div className={styles.rule}>
            <h3 className={styles.ruleTitle}>3. Be honest in descriptions</h3>
            <p>
              Clearly state condition (new / good / needs repair / as-is).
              Include real photos of the actual item.
            </p>
          </div>

          <div className={styles.rule}>
            <h3 className={styles.ruleTitle}>4. Respect pickup arrangements</h3>
            <p>
              Agree on time & place politely. If plans change — let the other
              person know as soon as possible.
            </p>
          </div>

          <div className={styles.rule}>
            <h3 className={styles.ruleTitle}>
              5. No spam, no commercial posts
            </h3>
            <p>
              No business promotion, no links to shops, no repeated identical
              posts.
            </p>
          </div>

          <div className={styles.rule}>
            <h3 className={styles.ruleTitle}>6. Be kind and patient</h3>
            <p>
              Treat others with respect. No harassment, no aggressive messaging.
              We're all neighbors here.
            </p>
          </div>

          <div className={styles.rule}>
            <h3 className={styles.ruleTitle}>
              7. First-come, first-served (usually)
            </h3>
            <p>
              Poster decides who gets the item. " dibs " comments are common but
              not strictly binding.
            </p>
          </div>
        </div>

        <div className={styles.footerSection}>
          <p>
            Breaking these rules may result in post removal or
            temporary/permanent ban.
          </p>
          <p>
            Questions? Message us through the platform or email
            support@yourdomain.com
          </p>
        </div>
      </div>
    </div>
  );
}
