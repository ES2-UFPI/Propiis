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

`;


export const Corpo = styled.div` 
    width: 1449px;
`;

export const Pesquisa = styled.div` 
    width: 1449px;
    height: 186px;
    margin-top: -130px;
    display: flex;
    gap: 30px;
    padding: 0px 180px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    .filtro{
        margin-top: 43px;
        color: #0B194A;
        display: flex;
        flex-direction: column;

        input{
            box-sizing: border-box;
            width: 200px;
            height: 40px;
            border: none;
            background: #d8d8d8;
            padding-left: 10px;
            ::placeholder{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 1.1rem;
            }
        }
    }

    button{
        margin-top: 64px;
        width: 109.68px;
        height: 61px;
        border: none;
        background: #49A5E8;
        border-radius: 20px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        color: white;
    }

    div {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 600;
        font-size: 1.6rem;
    }
    

`;

export const Sugestoes = styled.div` 
    .texto_menor{
        width: 888px;
        height: 140px;
        margin-left: 270px;
        margin-top: 70px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 1.4rem;
        line-height: 125%;
        /* or 70px */

        text-align: left;

        color: #0B194A;
    }

    .texto{
        width: 888px;
        height: 140px;
        margin-left: 280px;
        margin-top: 100px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 2.9rem;
        line-height: 125%;
        /* or 70px */

        text-align: center;

        color: #0B194A;
    }
`;
