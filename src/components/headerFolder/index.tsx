import { Container } from "./styles";
import { BsPlusLg } from "react-icons/bs"
import { IconContext } from "react-icons"

interface HeaderProps{
    onOpenNewPostModal: () => void;
}

export function Header({onOpenNewPostModal}: HeaderProps): JSX.Element{

    return(
        <Container>
            <h1>ODAM</h1>
            <IconContext.Provider value={{size:"1.3rem"}}>
                <button type="button" onClick={onOpenNewPostModal}>
                    <BsPlusLg />
                </button>
            </IconContext.Provider>
        </Container>       
    );
}