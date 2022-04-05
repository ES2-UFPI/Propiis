import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .fotohome{
        width: 100%;
    }

    .calendarios{
        display: flex;
        gap: 10px;
    }

    .calendario{
        width: 350px;
        padding: 15px;
        background: white;
        box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        #close-icon{
            cursor: pointer;
        }

        button#close-icon{ 
            width: 100%;
            background: #49A5E8;
            border-radius: 5px;
            border: none;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;
            text-align: center;

            color: #FFFFFF;

            :hover{
                opacity: 70%;
            }
        }

        .botoes{
            display: flex;
            gap: 5px;
        }
    }

    .calendario2{
        background: white;
        width: 350px;
        padding: 15px;
        box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        #close-icon{
            cursor: pointer;
        }

        button#close-icon{ 
            width: 100%;
            background: #49A5E8;
            border-radius: 5px;
            border: none;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;
            text-align: center;

            color: #FFFFFF;

            :hover{
                opacity: 70%;
            }
        }

        .botoes{
            display: flex;
            gap: 5px;
        }
    }

   
`;


export const Corpo = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    
`;

export const Pesquisa = styled.div` 
    width: 1100px;
    height: 160px;
    margin-top: -100px;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    .filtro{
        
        color: #0B194A;
        display: flex;
        flex-direction: column;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 54px;

        color: #000000;

        input{
            box-sizing: border-box;
            width: 180px;
            height: 40px;
            border: none;
            background: #d8d8d8;
            padding-left: 10px;
            outline: none;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            
            ::placeholder{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 1rem;
            }
        }
    }

    button{
        margin-top: 54px;
        width: 80.68px;
        height: 41px;
        border: none;
        background: #49A5E8;
        border-radius: 10px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: white;

        :hover{
            opacity: 80%;
        }
    }

    div {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 600;
        font-size: 1.6rem;
    }
    

`;

export const Sugestoes = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    gap: 10px;
    .texto_menor{
        width: 888px;
       
        margin-top: 30px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 1.1rem;
        line-height: 125%;
        text-align: center;
        /* or 70px */

        text-align: left;

        color: #0B194A;
    }

    .texto{
        width: 888px;
        
        margin-top: 150px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 2rem;
        line-height: 125%;
        /* or 70px */

        text-align: center;

        color: #0B194A;
    }
`;
