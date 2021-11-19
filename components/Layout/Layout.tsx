import Navbar from "@components/Navbar/Navbar"
import styles from './layout.module.css'
// CSS Module
// https://nextjs.org/docs/basic-features/built-in-css-support

const Layout: React.FC = ({children}) => {
    return (
        <div className={styles.container}>
            <Navbar />
            {children}
            <footer>This is the footer</footer>
        </div>
    )
}

export default Layout
