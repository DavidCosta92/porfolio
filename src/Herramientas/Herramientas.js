import "./Herramientas.scss"

const Herramientas = ()=>{
    return (
        <div className="herramientas">
            <p className="titulo"> HERRAMIENTAS </p>
            <span className="toolsContainer">
                <img src="./assets/icons/html.png" alt="Logo html"/>
                <img src="./assets/icons/css.png" alt="Logo css"/>
                <img src="./assets/icons/js.png" alt="Logo js"/>
                <img src="./assets/icons/git.png" alt="Logo git"/>
                <img src="./assets/icons/github.png" alt="Logo github"/>
                <img src="./assets/icons/firebase.png" alt="Logo firebase"/>
                <img src="./assets/icons/react.png" alt="Logo react"/>
                <img src="./assets/icons/bootstrap.png" alt="Logo bootstrap"/>
            </span>
            <span className="contenedorAprendiendo">
                <p className="subtitulo">Aprendiendo</p>
                <span className="toolsContainer">
                    <img src="./assets/icons/python.png" alt="Logo python"/>
                    <img src="./assets/icons/sql.png" alt="Logo sql"/>
                    <img src="./assets/icons/worpress.png" alt="Logo worpress"/>
                </span>
            </span>
        </div>
    )
}
export default Herramientas;