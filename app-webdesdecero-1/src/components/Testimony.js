// Componente de testimonos.
import Subtitle from './Subtitle'
import './css/testimony.css'

const TestimonyTexts = ( {itemName, itemCargo} ) => {
    return (
        <div className="testimony__texts">
            <h3 className="testimony__name">{itemName}</h3>
            <p className="testimony__verification">{itemCargo}</p>
        </div>
    )
}

const TestimonyItem = ( {imgItem, itemName, itemCargo} ) => {
    return (
        <article className="testimony__item">
            <div className="testimony__person">
                <img src={imgItem} className="testimony__img" />
                <TestimonyTexts 
                    itemName={itemName}
                    itemCargo={itemCargo}
                />
            </div>

            <p className="testimony__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis, laboriosam ducimus assumenda eos vel magni neque facere quia corporis esse asperiores et ex ratione.
            </p>
        </article>
    )
}


const Testimony = () => {
    return (
        <section className="testimony container">
            <Subtitle>¿Qué dicen de Nosotros?</Subtitle>
            <div className="testimony__grid">
                <TestimonyItem 
                    imgItem="assets/JavierArmando2.jpg"
                    itemName="Javier Armando Vargas Vega"
                    itemCargo="Funcionario Público"
                />
                <TestimonyItem 
                    imgItem="assets/FacePerson1.jpg"
                    itemName="Pedro López"
                    itemCargo="Creador de Programas"
                />
            </div>
        </section>
    )
}

export default Testimony
