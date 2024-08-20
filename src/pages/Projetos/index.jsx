import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'
import { motion } from 'framer-motion'

function Projetos() {

    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/MarcioDavid81/repos?page=1&per_page=50')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <motion.section
            className={styles.projetos}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: 100 }}
        >
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </motion.section>
    )
}

export default Projetos
