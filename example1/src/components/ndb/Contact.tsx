import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Contact</h2>
        <p className={styles.lead}>お気軽にご相談ください</p>
        <div className={styles.phoneBlock}>
          <p className={styles.phoneLabel}>お電話でのお問い合わせ</p>
          <a href="tel:0334565381" className={styles.phone}>
            03-3456-5381
          </a>
          <p className={styles.hours}>受付時間：10:00〜16:00（平日）</p>
        </div>
        <a
          href="https://ndbnet.co.jp/contact/"
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          メールでのお問い合わせ →
        </a>
      </div>
    </section>
  );
}
