import styles from "./NewsList.module.css";
import { news } from "@/lib/ndb-data";

export default function NewsList() {
  return (
    <section className={styles.section} id="news">
      <div className={styles.inner}>
        <h2 className={styles.heading}>News</h2>
        <p className={styles.lead}>最新情報</p>
        <ul className={styles.list}>
          {news.map((item) => (
            <li key={`${item.date}-${item.title}`} className={styles.item}>
              <time className={styles.date} dateTime={item.date}>
                {item.date}
              </time>
              <span className={styles.category}>{item.category}</span>
              <span className={styles.title}>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
