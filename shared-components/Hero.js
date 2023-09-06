import styles from "./Hero.module.css";

export default function Hero({ title, subtitle }) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
