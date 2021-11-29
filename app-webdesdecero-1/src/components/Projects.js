// Clases projects
import Subtitle from './Subtitle'
import './css/projects.css'


// componente para cada artículo
const ArticleProject = ( {imgArticle, projectTitle} ) => {
    return (
        <article className="projects__item">
            <img src={imgArticle} alt="" className="projects__img" />
            <div className="projects__hover">
                <h2 className="projects__title">{projectTitle}</h2>
                <i className="far fa-file-alt projects__icon"></i>
            </div>
        </article>        
    )
}

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <Subtitle>Mis Proyectos</Subtitle>
                <div className="projects__grid">
                    <ArticleProject 
                        imgArticle="assets/Image3.jpg"
                        projectTitle="Proyecto 1"
                    />
                    <ArticleProject 
                        imgArticle="assets/image4.jpg"
                        projectTitle="Proyecto 2"
                    />
                    <ArticleProject 
                        imgArticle="assets/Image5.jpg"
                        projectTitle="Proyecto 3"
                    />
                    <ArticleProject 
                        imgArticle="assets/Image6.jpg"
                        projectTitle="Proyecto 4"
                    />
                    <ArticleProject 
                        imgArticle="assets/Image7.jpg"
                        projectTitle="Proyecto 5"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects