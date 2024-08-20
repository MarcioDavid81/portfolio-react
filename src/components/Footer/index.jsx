import styles from './Footer.module.css'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <motion.footer
            className={styles.footer}
            initial={{ opacity: 0, y: 110 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: 100 }}
        >
            Feito com ❣️ por Marcio David © 2024
        </motion.footer>
    )
}

export default Footer
