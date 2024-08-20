import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <motion.header
            className={styles.header}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link to="/">
                <span>marciodavid.com</span>
            </Link>
            <nav
                className={`${styles.menuSandwich} ${showMenu ? styles.show : ''}`}
                onClick={toggleMenu}
            >
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
            <div
                className={styles.menuButton}
                onClick={toggleMenu}
            >
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </motion.header>
    )
}

export default Header
