import "./BodyContainer.scss"

import Herramientas from "../Herramientas/Herramientas";
import Proyectos from "../Proyectos/Proyectos";
import Contacto from "../Contacto/Contacto";
import Extras from "../Extras/Extras";
import PrimeraPagina from "../PrimeraPagina/PrimeraPagina";



const BodyContainer = ()=>{
    return (
        <div className="bodyContainer">
            <PrimeraPagina/>
            <Herramientas/>
            <Proyectos/>
            <Extras/>
            <Contacto/>
        </div>
    )
}
export default BodyContainer;