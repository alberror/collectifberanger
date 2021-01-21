import styles from "../../styles/PageContainer.module.css"

export const PageContainer = ({children}) => (
  <div className={styles.pageContainer}>
    {children}
  </div>
)