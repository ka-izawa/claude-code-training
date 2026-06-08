import styles from "./Features.module.css";
import { features } from "@/lib/ndb-data";

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.inner}>
        <h2 className={styles.heading}>会社の特徴</h2>
        <p className={styles.lead}>私たちが選ばれる理由</p>
        <ul className={styles.list}>
          {features.map((f, i) => (
            <li key={`feature-${f.title}`} className={styles.item}>
              <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.itemTitle}>{f.title}</h3>
                <p className={styles.itemBody}>{f.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
