import styles from "./ServiceList.module.css";
import { services } from "@/lib/ndb-data";

export default function ServiceList() {
  return (
    <section className={styles.section} id="service">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Service</h2>
        <p className={styles.lead}>私たちが提供する3つのサービス</p>
        <ul className={styles.grid}>
          {services.map((s) => (
            <li key={`service-${s.title}`} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardBody}>{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
