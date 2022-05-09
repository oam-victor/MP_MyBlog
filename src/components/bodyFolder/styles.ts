import styled from "styled-components";

export const Container = styled.div`
    .buttons{
        display: flex;
        width: 80%;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        background: white;
        border-radius: 0.25rem;
        border: 0.1rem solid black;
        box-shadow: 1px 1px 5px black;
    }
   

    dl{
        flex: 8;

        dt{
            font-weight: 400;
            font-size: 2rem;
            margin-bottom: 0.5rem;
            margin-left: 1.8rem;
        }

        dd{
            &.listBody{
                font-size:1.15rem;
                margin-left: 4rem;
                margin-right: 5rem;
                margin-bottom: 0.5rem;
        }

            &.listFooter{
                font-style: italic;
                display: flex;
                justify-content: flex-end;
                margin-right: 5.5rem;
                padding-bottom: 0.5rem;
            } 
        }

    }

    button{
        margin-right: .5rem;
        background: white;
        transition: filter 0.3s;
        border: none;
        transition: 0.2s;

        &:hover{
            color: red;
        }
       
    }

    
`;