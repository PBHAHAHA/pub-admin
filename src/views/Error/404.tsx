import styles from "./index.module.scss"

export default function Error404() {
  return (
    <div className={styles['err-404-container']}>
        <div className={styles['item']} title="404">404</div>
    </div>
  )
}
