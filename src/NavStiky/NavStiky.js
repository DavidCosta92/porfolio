import "./NavStiky.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const NavStiky = ()=>{
    return (
        <div className="NavStiky">
            <span className="btnThemeUp">
            <NightlightIcon/>
            <a className="linkedin" href="#"title="Inicio" > <KeyboardDoubleArrowUpIcon/></a>
            </span>
            <span className="redes">
                <a className="linkedin" href="https://www.linkedin.com/in/david-costa-yafar" target="_blank" rel="noreferrer" title="Visitar LinkedIn"> <LinkedInIcon/> </a>
                <a className="github" href="https://github.com/DavidCosta92" target="_blank" rel="noreferrer" title="Vamos a los repos"> <GitHubIcon/></a>
                <a className="mail" href="mailto:davidcst2991@gmail.com" title="¿Quieres enviarme un mail?"> <MailIcon/></a>
                <a className="cv" href="https://drive.google.com/file/d/1egMWVTlKmq-9caILFkjnnL8G_eBw8tFJ/view?usp=sharing" target="_blank" rel="noreferrer" title="Ver Curriculum"><ContactPageIcon/></a>
            </span>
        </div>
    )
}
export default NavStiky;