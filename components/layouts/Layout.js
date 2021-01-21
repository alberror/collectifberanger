import styles from '../../styles/Layout.module.css'
import { Header } from './'

export const Layout = ({children}) => (
  <div className={styles.layout}>
    <Header />
    {children}
  </div>
)