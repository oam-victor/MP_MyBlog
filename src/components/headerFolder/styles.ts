import styled from "styled-components"

export const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid;
    font-size: 2rem;
    font-weight: 800;

    button{
        border: none;
        background: var(--bgColor);
        padding-right: .75rem;
        padding-top: 1rem;
        transition: 0.2s;

        &:hover{
            color: red;
            cursor: pointer;
        }
        &:focus{
            border: none;
        }
    }
`;