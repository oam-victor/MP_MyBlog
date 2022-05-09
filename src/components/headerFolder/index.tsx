import { Container } from "./styles";
import { BsPlusLg } from "react-icons/bs"
import { IconContext } from "react-icons";

export function Header(){
    return(
        <Container>
            <h1>ODAM</h1>
            <IconContext.Provider value={{size:"1.3rem"}}>
                <button 
                type="button">
                    <BsPlusLg/>
                </button>
            </IconContext.Provider>
        </Container>
    );
}