import styles from "./Recruit.module.css";

export default function Recruit() {
  return (
    <section className={styles.section} id="recruit">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Recruit</h2>
        <p className={styles.lead}>共に未来を創る仲間を募集しています</p>
        <p className={styles.body}>
          私たちは、技術と誠実さでお客様の課題に向き合えるエンジニアを求めています。
          経験の有無よりも、学ぶ意欲とチームへの貢献を大切にしています。
          あなたのキャリアをここから始めてみませんか。
        </p>
        <a
          href="https://ndbnet.co.jp/recruit/"
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          採用情報を見る →
        </a>
      </div>
    </section>
  );
}
