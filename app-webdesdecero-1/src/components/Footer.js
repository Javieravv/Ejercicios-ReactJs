// componente de pie de página
import './css/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__grid">
                <nav className="nav nav--footer">
                    <a className="nav__items nav__items--footer" href="#">Inicio</a>
                    <a className="nav__items nav__items--footer" href="#">Sobre mí</a>
                    <a className="nav__items nav__items--footer" href="#">Mis skills</a>
                    <a className="nav__items nav__items--footer" href="#">Proyectos</a>
                </nav>
                <section className="footer__contact">
                    <h3 className="footer__title">Contáctame</h3>
                    <div className="footer__icons">
                        <span className="footer__container-icons">
                            <a className="fab fa-facebook footer__icon" href="#"></a>
                        </span>
                        <span className="footer__container-icons">
                            <a className="fab fa-twitter footer__icon" href="#"></a>
                        </span>
                        <span className="footer__container-icons">
                            <a className="fab fa-whatsapp footer__icon" href="#"></a>
                        </span>
                        <span className="footer__container-icons">
                            <a className="fab fa-instagram footer__icon" href="#"></a>
                        </span>
                        <span className="footer__container-icons">
                            <a className="fab fa-youtube footer__icon" href="#"></a>
                        </span>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer