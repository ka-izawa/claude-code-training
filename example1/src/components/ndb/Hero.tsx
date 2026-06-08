import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          お客様と共に、
          <br />
          情報技術で未来を創る。
        </h1>
        <p className={styles.sub}>We are the company that supports the future.</p>
        <a href="#contact" className={styles.cta}>
          お問い合わせ
        </a>
      </div>
    </section>
  );
}
