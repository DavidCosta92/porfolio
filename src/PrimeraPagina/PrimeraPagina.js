import "./PrimeraPagina.scss"

import FotoPerfil from "../FotoPerfil/FotoPerfil";
import TypingText from "../TypingText/TypingText";

const PrimeraPagina = ()=>{
    let sequence1A = [
        '',
        2000,
        'Soy',
        2000,
        '',
        ]
    let sequence1B = [
        '',
        4000,
        'Desarrollador Frontend',
        ]
    let sequence2 = [
        '',
        2400,
        'David',
        ]
    return (
        <div className="primeraPagina">
            <FotoPerfil/>
            <span className="dinamicText sequence1A" >
                <TypingText text={sequence1A} aling="left" fontSize={1.8}/>
            </span>
            <span className="dinamicText sequence1B">
                <TypingText text={sequence1B} aling="left" fontSize={1.8}/>
            </span>
            <span className="dinamicTextNombre">
                <TypingText text={sequence2} aling="right" fontSize={4}/>
            </span>
            <span className="introduccion">
                <p>Estoy en busqueda de un proyecto que
                    genere un impacto positivo, necesito de un
                    equipo donde apoyarme, aprender y con el
                    cual pueda compartir metas. 
                </p>
                <span><p>¿Trabajamos juntos?</p></span>
            </span>
        </div>
    )
}
export default PrimeraPagina;