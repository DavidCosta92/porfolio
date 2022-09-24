
import { TypeAnimation } from 'react-type-animation';

const TypingText =({text,aling,fontSize})=>{
    return (
        <TypeAnimation            
            sequence={text}
            wrapper="div"
            cursor={false}
            repeat={0}
            style={{ fontSize:`${fontSize}em`, textAlign:`${aling}`}}
            speed="30"
        />
    )
}
export default TypingText;