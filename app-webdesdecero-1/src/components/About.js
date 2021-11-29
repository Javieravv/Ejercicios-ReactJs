// Compnente acerca de.
import Subtitle from './Subtitle'
import './css/about.css'
import './css/header.css'


// componente para mostrar las imágenes.
const Figura = ( {clases, imgSrc}) => {
    return (
        <figure className={clases} >
            <img 
                src={imgSrc} 
                className="about__picture" 
            />
        </figure>        
    )
}

const About = () => {
    return (
        <section className="about container">
            <div className="about__texts">
                <Subtitle>Mis habilidades</Subtitle>
                <p className="about__paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio saepe, eius ipsum consequuntur ab voluptatem sunt perferendis voluptas animi quas commodi corporis. Unde quibusdam, sunt amet itaque modi possimus natus, voluptas, alias quae error consectetur eaque. Aperiam, non explicabo qui dignissimos dolorem iusto et. Voluptas, sequi? Sapiente, itaque quasi.
                </p>
                <p className="about__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quos. Voluptatum quam ab sapiente doloremque tempore facere cupiditate reprehenderit nulla architecto odit ut beatae culpa asperiores aut, excepturi saepe laboriosam deleniti consequuntur delectus mollitia ea cum iure voluptates. Eveniet, totam.
                </p>
            </div>
            <Figura 
                clases="about__img"
                imgSrc="assets/Image2.jpg" 
            />
            <Figura 
                clases="about__img about__img--left"
                imgSrc="assets/Undraw_Dev.svg" 
            />
            

            <div className="about__texts">
                <Subtitle>Sobre mi trabajo</Subtitle>
                <p className="about__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex dolorum omnis fuga quae? Quos ducimus, provident fugiat facere, fugit quidem dolores ex, natus veniam dolorum vitae quo repellat iusto dolore sequi voluptate placeat assumenda! Illum alias ducimus voluptates reiciendis autem? Dolore vitae non consequuntur earum enim magnam quam inventore?
                </p>
                <p className="about__paragraph">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quam unde totam magnam cumque doloribus nulla delectus incidunt in sunt fuga hic laboriosam fugiat doloremque deleniti et numquam, quasi facilis. Expedita tempore dignissimos blanditiis facilis dolores et deserunt fugit doloribus adipisci rerum aspernatur qui nemo aliquid iure totam aliquam deleniti repellat, officia animi impedit itaque.
                </p>
            </div>
        </section>
    )
}

export default About