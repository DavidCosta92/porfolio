import "./Navbar.scss"
import NavStiky from '../NavStiky/NavStiky';
import TypingText from "../TypingText/TypingText";

const Navbar = ()=>{
    let sequence = [
        '¡Hola!',
        1000,
        '',
        ]
    return (
        <>
            <NavStiky/>
        <div className="navbarContainer">  
            <span className="dinamicText">
                <TypingText  text={sequence} aling="left" fontSize={3}/>
            </span>
        </div>
        </>
    )
}
export default Navbar;