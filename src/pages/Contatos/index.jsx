import styles from './Contatos.module.css'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre</p>

            <div className={styles.icones}>
                
                <a href='mailto:contato@marciodavid.com' target='_blank' rel='noopener noreferrer'>
                    <GoMail className={styles.icone} />
                </a>

                <a href='https://www.instagram.com/o_marciodavid/' target='_blank' rel='noopener noreferrer'>
                    <BsInstagram className={styles.icone} />
                </a>

                <a href='https://www.facebook.com/marcio.david.754/' target='_blank' rel='noopener noreferrer'>
                    <BsFacebook className={styles.icone} />
                </a>

                <a href='https://github.com/MarcioDavid81' target='_blank' rel='noopener noreferrer'>
                    <BsGithub className={styles.icone} />
                </a>

                <a href='https://www.linkedin.com/in/marcio-david-a8152733/' target='_blank' rel='noopener noreferrer'>
                    <BsLinkedin className={styles.icone} />
                </a>

            </div>

        </section>
    )
}

export default Contatos
