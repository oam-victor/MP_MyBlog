import styled from 'styled-components';

export const Container = styled.form`

     div{
        display: flex;
        flex-direction:column ;
        padding-left: 2rem;
        width: 50%;
        label{
            margin-top: 1rem ;
        }
    }
    div:nth-child(3){
        width: 50%;
        margin-top: .5rem;
        display: flex;
        justify-content: center;
        align-items: center ;
        button{
            position: relative;
            left: 4rem;
            padding: 0rem 2rem 0rem;
            background: rgb(22, 53, 159);
            border: solid 1px rgb(22, 53, 159);
            border-radius: 2px;
            color: white;
            font-weight: bold;
            box-shadow: 2px 2px 5px 1px black;
            transition: .2s;

            &:hover{
                opacity: .7;
                cursor: pointer;
            }
            &:active{
                border: 2px;
                opacity: 1; 
                box-shadow: 1px 1px 2px 1px;
            }
            
        }
    }

    @media screen and (max-width: 820px){
        div:nth-child(3){
            button{
                position: relative;
                left: 5rem;    
            }
        }
    } 
`;