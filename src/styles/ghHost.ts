import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    
`; 

export const Corpo = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    .voltar{
        margin-top: 20px;
        display: flex;
        gap: 10px;
        align-items: center;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;

        text-align: center;

        color: #17181A;

        #icon-voltar{
            margin-top: 6px;
        }
    }
`;

export const Title = styled.h1`
    margin-top: 10px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: left;

    color: #0B194A;
`;
