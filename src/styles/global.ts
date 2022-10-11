import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --bg: #E2F3F3;
        --letter: #16359F;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width:1080px){
            font-size:93.75%;
        }
        @media (max-width:728px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--bg);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
        color: var(--letter);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }
    .react-modal-content{

        width: 100%;
        max-width: 390px;
        background: white;
        padding: 1rem 1rem 1rem 1rem;
        position: relative;
        border-radius: 0.24rem;
        div, textarea{
            font-weight: bold;
            input[type="text"]{
                font-weight: bold;
            }
        }
    }

    @media screen and (max-width: 820px){
        .react-modal-content{
            max-width: 414px;
          h2{
              font-size: 1.8rem;
          }
          div{
              font-size: 1.5rem;
              input[type="text"]{
                font-size: 1.05rem;
              }
              textarea{
                font-size: 1.05rem;
              }
          }
          
        }
    }
`;

