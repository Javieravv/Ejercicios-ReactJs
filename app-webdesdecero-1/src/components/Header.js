// Componente Hedader
import './css/header.css'

const NavMain = () => {
    return (
        <nav className="nav">
            <a className="nav__items nav__items--cta" href="#">Contáctame</a>
            <a className="nav__items" href="#">Sobre mí</a>
            <a className="nav__items" href="#">Proyectos</a>
        </nav>
    )
}

const HeaderContain = () => {
    return (
        <section className="hero__container">
            <div className="hero__texts">
                <h1 className="hero__title">Hola. Soy Javier Armando [Abogado y Frontend Develper Student]</h1>
                <h2 className="hero__subtitle">Al servicio de la comunidad con la tecnología</h2>
                <a href="#" className="hero__cta">Contáctame Ahora</a>
            </div>
        </section>
    )
}

/*Colocamos estilos in inline para poder usar backGroundImage, pues se presenta problema si se trae de un css */
const estilos = {
    container: {
        height: '100vh',
        backgroundImage: `linear-gradient(135deg, #667eea7e 0%, #764ba298 100%), url('/assets/Image1.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        position: 'relative',
    },
    wave: {
        overflow: 'hidden',
    },
    svg: {
        height: '100%',
        width: '100%',
    },
    path: {
        stroke: 'none',
        fill: '#fff',
    }
}

const Header = () => {
    return (
        <>
        <header clasName="hero" style={estilos.container}>
            <div className="container">
                <NavMain />
                <HeaderContain />
                <div 
                    className="hero__wave" 
                    style={estilos.wave} 
                >
                    <svg 
                        viewBox="0 0 500 150" preserveAspectRatio="none" 
                        style={estilos.svg}>
                        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={estilos.path}></path> />
                    </svg>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
