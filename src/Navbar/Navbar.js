import "./Navbar.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import TypingText from "../TypingText/TypingText";

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const Navbar = ()=>{
    let sequence = [
        '¡Hola!',
        1000,
        '',
        ]
    return (
        <div className="navbarContainer">  
            <div className="navbarBtnContainer">
                <span className="btnTheme">
                    <NightlightIcon/>
                </span>
                <span className="redes">
                    <LinkedInIcon/>
                    <GitHubIcon/>
                    <MailIcon/>
                </span>
            </div>
            <span className="dinamicText">
                <TypingText  text={sequence} aling="left" fontSize={1.5}/>
            </span>
        </div>
    )
}
export default Navbar;