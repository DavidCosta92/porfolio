import "./Proyectos.scss"

const Proyectos= () =>{
    function handleClick(){
        console.log("hice click")
    }
    return (
        <div className="proyectos">
            <p>Proyectos</p>
            <span>
                <div class="ih-item square colored effect6 from_top_and_bottom cardProyect"><a href="https://ecomerce-react-coderhouse-vcp.vercel.app/" target="_blank" rel="noreferrer">
                    <div class="img"><img src="./assets/imagenes/vcp-vistaMiniatura.png" alt="img"/></div>
                    <div class="info">
                        <span className="botoneraProyecto">
                            <a href="https://ecomerce-react-coderhouse-vcp.vercel.app/" target="_blank" rel="noreferrer"><button> Deploy </button></a>
                            <a href="https://github.com/DavidCosta92/Ecomerce-React-Coderhouse-VCP.git" target="_blank" rel="noreferrer"><button> Repo </button></a>
                        </span>
                        <p id="tituloProyecto">Ecomerce React Js</p>
                        <p id="descripcionProyecto">Ecomerce inspirado en Van Como Piña, desarrollado en React Js, utilizacion de Material UI, ectssss</p>

                    </div>
                    </a>
                </div>



                <div class="ih-item square colored effect6 from_top_and_bottom cardProyect"><a href="https://ecomerce-react-coderhouse-vcp.vercel.app/" target="_blank" rel="noreferrer">
                    <div class="img"><img src="./assets/imagenes/cem-vistaMiniatura.png" alt="img"/></div>
                    <div class="info">
                        <span className="botoneraProyecto">
                            <a href="https://davidcosta92.github.io/pagina-Web-Consultorio/" target="_blank" rel="noreferrer"><button> Deploy </button></a>
                            <a href="https://github.com/DavidCosta92/pagina-Web-Consultorio.git" target="_blank" rel="noreferrer"><button> Repo </button></a>
                        </span>
                        <p id="tituloProyecto">Clinica CEM</p>
                        <p id="descripcionProyecto">Pagina institucional creada para clinica de diversas especialidades de la salud. 
                                    Construida y adaptada con tecnicas de SEO, usando HTML, CSS, Bootstrap, y JS.</p>
                    </div>
                    </a>
                </div>


                <div class="ih-item square colored effect6 from_top_and_bottom cardProyect"><a href="https://ecomerce-react-coderhouse-vcp.vercel.app/" target="_blank" rel="noreferrer">
                    <div class="img"><img src="./assets/imagenes/fravega-vistaMiniatura.png" alt="img"/></div>
                    <div class="info">
                        <span className="botoneraProyecto">
                            <a href="https://davidcosta92.github.io/Ecomerce-Js-CoderHouse/" target="_blank" rel="noreferrer"><button> Deploy </button></a>
                            <a href="https://github.com/DavidCosta92/Ecomerce-Js-CoderHouse.git" target="_blank" rel="noreferrer"><button> Repo </button></a>
                        </span>
                        <p id="tituloProyecto">Ecomerce JS</p>
                        <p id="descripcionProyecto">Ecomerce creado en JavaScript, inspirado en la marca Fravega, realizado dentro del curso Javascript, de Ecomerce-Js-CoderHouse
                                    para practicar habilidades y conocimientos espcificos.
                                    Simula logica de carrito de compras, como asi tambien creacion y login de usuarios en Session Storage.</p>
                    </div>
                    </a>
                </div>

                <div class="ih-item square colored effect6 from_top_and_bottom cardProyect"><a href="https://ecomerce-react-coderhouse-vcp.vercel.app/" target="_blank" rel="noreferrer">
                    <div class="img"><img src="./assets/imagenes/hidropedales-vistaMiniatura.png" alt="img"/></div>
                    <div class="info">
                        <span className="botoneraProyecto">
                            <a href="https://davidcosta92.github.io/HidropedalesSj-CostaDavid/" target="_blank" rel="noreferrer"><button> Deploy </button></a>
                            <a href="https://github.com/DavidCosta92/HidropedalesSj-CostaDavid.git" target="_blank" rel="noreferrer"><button> Repo </button></a>
                        </span>
                        <p id="tituloProyecto">Hidropedales San Juan</p>
                        <p id="descripcionProyecto">Landing page realizada para empresa de Turismo, con formulario de contacto y mapa. 
                                    Construida y adaptada con tecnicas de SEO, usando HTML, CSS, Bootstrap, y JS.</p>
                    </div>
                    </a>
                </div>

                <div class="ih-item square colored effect6 from_top_and_bottom cardProyect"><a href="https://ecomerce-react-coderhouse-vcp.vercel.app/" target="_blank" rel="noreferrer">
                    <div class="img"><img src="./assets/imagenes/sup-vistaMiniatura.png" alt="img"/></div>
                    <div class="info">
                        <span className="botoneraProyecto">
                            <a href="https://davidcosta92.github.io/SanJuanSup/" target="_blank" rel="noreferrer"><button> Deploy </button></a>
                            <a href="https://github.com/DavidCosta92/SanJuanSup.git" target="_blank" rel="noreferrer"><button> Repo </button></a>
                        </span>
                        <p id="tituloProyecto">San Juan Sup</p>
                        <p id="descripcionProyecto">Ecomerce inspirado en Van Como Piña, desarrollado en React Js, utilizacion de Material UI, ectssss</p>
                    </div>
                    </a>
                </div>
                






            </span>
        </div>
    )
}
export default Proyectos;