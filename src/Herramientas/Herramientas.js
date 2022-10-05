import "./Herramientas.scss"

const Herramientas = ()=>{
    return (
        <div className="herramientas">
            <p className="titulo"> HERRAMIENTAS </p>
            <span className="toolsContainer">
                <img src="./assets/icons/html.png" alt="Logo html"/>
                <img src="./assets/icons/css.png" alt="Logo css"/>
                <img src="./assets/icons/js.png" alt="Logo js"/>                
                <img src="./assets/icons/react.png" alt="Logo react"/>
                <img src="./assets/icons/git.png" alt="Logo git"/>
                <img src="./assets/icons/github.png" alt="Logo github"/>
                <img src="./assets/icons/firebase.png" alt="Logo firebase"/>
                <img src="./assets/icons/bootstrap.png" alt="Logo bootstrap"/>
            </span>
            <span className="contenedorAprendiendo">
                <p className="subtitulo">Aprendizaje constante</p>
                <p>Actualmente estudio una Tecnicatura en desarrollo web y aplicaciones digitales
                    donde estoy utilizando lenguajes y heramientas muy interesantes
                </p>
                <p className="softSkills">A la vez que fortalezco soft skills como</p>
                <div>
                    <span className="softContainer">
                        <p>Trabajo en equipo</p>
                        <p>Metodologias agiles</p>
                        <p>Documentacion y requerimientos de proyecto</p>
                    </span>
                    <span className="toolsContainer">
                        <img src="./assets/icons/python.png" alt="Logo python"/>
                        <img src="./assets/icons/sql.png" alt="Logo sql"/>
                        <img src="./assets/icons/worpress.png" alt="Logo worpress"/>
                        <img src="./assets/icons/team.png" alt="Logo Equipo de trabajo"/> 
                        <img src="./assets/icons/scrum.png" alt="Logo Scrum"/>
                        <img src="./assets/icons/ieee.png" alt="Logo IEEE"/>
                    </span>
                </div>


            </span>
        </div>
    )
}
export default Herramientas;