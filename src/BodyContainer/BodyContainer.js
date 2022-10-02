import "./BodyContainer.scss"
import FotoPerfil from "../FotoPerfil/FotoPerfil";
import TypingText from "../TypingText/TypingText";
import Herramientas from "../Herramientas/Herramientas";
import Proyectos from "../Proyectos/Proyectos";
import Contacto from "../Contacto/Contacto";
import Extras from "../Extras/Extras";


const BodyContainer = ()=>{
    let sequence1 = [
        '',
        2000,
        'Soy',
        2000,
        'Desarrollador Frontend',
        ]
    let sequence2 = [
        '',
        2400,
        'David',
        ]
    return (
        <div className="bodyContainer">
            <FotoPerfil/>
            <span className="dinamicText">
                <TypingText text={sequence1} aling="left" fontSize={1.8}/>
            </span>
            <span className="dinamicTextNombre">
                <TypingText text={sequence2} aling="right" fontSize={4}/>
            </span>
            <span className="introduccion">
                <p>Estoy en busqueda de un proyecto que
                    genere un impacto positivo, necesito de un
                    equipo donde apoyarme, aprender y con el
                    cual pueda compartir metas.
                    <span>¿Trabajamos juntos?</span>
                </p>
            </span>
            <Herramientas/>
            <Proyectos/>
            <Extras/>
            <Contacto/>
        </div>
    )
}
export default BodyContainer;