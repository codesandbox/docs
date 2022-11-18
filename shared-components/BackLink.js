import styles from "./BackLink.module.css";

export default function BackLink() {
  return (
    <a className={styles.link} href="https://codesandbox.io">
      Back to codesandbox.io
    </a>
  );
}
