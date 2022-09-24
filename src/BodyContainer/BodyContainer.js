import "./BodyContainer.scss"
import FotoPerfil from "../FotoPerfil/FotoPerfil";
import TypingText from "../TypingText/TypingText";
import Herramientas from "../Herramientas/Herramientas";


const BodyContainer = ()=>{
    let sequence = [
        '',
        2000,
        'Soy David',
        ]
    return (
        <div className="bodyContainer">
            <FotoPerfil/>
            <span className="dinamicText">
                <TypingText text={sequence} aling="right" fontSize={2.8}/>
            </span>
            <span className="introduccion">
                <p>Recientemente elegi el camino del programador, como una forma de vida en donde tengo mucho que aprender,
                     pero asi tambien para enseñar.. Actualmente estudiando mientras busco proyectos y un equipo desafiante!</p>
            </span>
            <Herramientas/>
        </div>
    )
}
export default BodyContainer;