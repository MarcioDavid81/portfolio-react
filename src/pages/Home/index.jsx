import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { motion } from 'framer-motion'

function Home() {
    return (
        <motion.section
            className={styles.home}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: 100 }}
        >
            <div className={styles.apresentacao}>
            <p>
                Hello World! I'm <br/>
                <span>Marcio David</span> <br/>
                Dev Front End
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                Saiba mais sobre mim
            </Link>
            </div>
            <figure>
            <img className={styles.img_home} src="/developer-red.svg" alt="Imagem de Home" />
            </figure>
        </motion.section>
    )
}

export default Home
