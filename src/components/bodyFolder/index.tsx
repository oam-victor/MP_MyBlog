import { Container } from "./styles";
import  { BiTrashAlt } from "react-icons/bi"
import { IconContext } from "react-icons";

export function Blogbody(){
    return(
        <Container>
            <div className="buttons">
                <dl>
                    <dt className="listTitle"> My day</dt>
                    <dd className="listBody"> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </dd>
                    <dd className="listFooter"> Victor</dd>
                </dl>
                
                <IconContext.Provider value={{ size: "1.3rem" }}>
                    <button
                    type="button">
                        <BiTrashAlt />
                    </button>
                </IconContext.Provider>
            </div>

            <div className="buttons">
                <dl>
                    <dt className="listTitle"> Your day</dt>
                    <dd className="listBody"> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </dd>
                    <dd className="listFooter"> Odam</dd>
                </dl>
                
                <IconContext.Provider value={{ size: "1.3rem" }}>
                    <button
                    type="button">
                        <BiTrashAlt />
                    </button>
                </IconContext.Provider>
            </div>
           
        </Container>
    );
}