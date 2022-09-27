import "./Navbar.scss"
import NavStiky from '../NavStiky/NavStiky';
import TypingText from "../TypingText/TypingText";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

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
                <TypingText  text={sequence} aling="left" fontSize={1.5}/>
            </span>
        </div>
        </>
    )
}
export default Navbar;