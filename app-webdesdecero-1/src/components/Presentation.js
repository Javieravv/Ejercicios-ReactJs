// Componente presentación
import Subtitle from './Subtitle'

const Presentation = () => {
    return (
        <section className="presentation container">
            <img src="assets/JavierArmando.jpg" alt="Javier" class="presentation__picture" />
            <Subtitle>Mi nombre es: Javier Armando</Subtitle>
            <p className="presentation__copy">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum explicabo eligendi autem numquam in iusto voluptatem maxime repellat voluptatum ab. Necessitatibus reprehenderit voluptatibus rerum? Nostrum impedit provident officia vel enim repellendus? Voluptatem dolorem inventore quia impedit consequuntur omnis tenetur hic, laborum et provident velit quo laboriosam, autem voluptate rem pariatur.
            </p>
            <a href="#" className="presentation__cta">Contáctame ahora</a>
        </section>
    )
}

export default Presentation
