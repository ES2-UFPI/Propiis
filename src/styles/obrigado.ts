import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
`; 

export const Corpo = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 200px;

    h2{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 125%;
        

        text-align: center;

        color: #17181A;

        b{
            color: #1ABD17;
        }
    }

    h2#principal{
        font-size: 2.2rem;
    }

    button{
        background: #E32A51;
        border-radius: 10px;
        width: 180px;
        outline: none;
        border: none;
        padding: 10px 0px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.1rem;
        text-align: center;

        color: #FFFFFF;
    }
`;