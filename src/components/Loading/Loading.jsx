import styles from "./Loading.module.css";

export function Loading() {
  return (
    <div className={styles.wrapperLogo}>
      <div className={styles.ring}>
        Carregando
        <span></span>
      </div>
    </div>
  );
}
