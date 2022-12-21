import "./PaginaRedireccion.scss"
const PaginaRedireccion = ()=>{

    return (
        <div className="PaginaRedireccion">
            <h1>Hola, gracias por visitarme!</h1>
            <h3>Lamentablemente, estoy reconstruyendo este sitio..</h3>
            <a className="botonRedireccion" href="https://davidcosta92.github.io/porfolio-david-costa/"  rel="noreferrer" title="VISITAR  PORFOLIO">
                <div className="enlace">
                    <h4>Pero, aqui dejo el enlace a mi porfolio provisorio!</h4>
                    
                        <img src="./assets/icons/enlace.png"/>
                    
                </div>
            </a>
            <h1>¡Saludos!</h1>
        </div>
    )
}
export default PaginaRedireccion;