import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    padding: 40px;

    .voltar{
        display: flex;
        
        gap: 10px;
        cursor: pointer;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;

        text-align: center;

        color: #17181A;

        a{
            margin-top: 3px; 
        }
    }
`; 


export const H1 = styled.div`
    margin-top: 20px;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 125%;


    color: #0B194A;
`;

export const Card = styled.div` 
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 220px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 10px;

    overflow-y: auto;
    
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    .title{
        display: flex;
        width: 100%;
        background: orange;
        justify-content: space-between;

        .left{
            display: flex;
        }
    }

    
`;

export const BodyCard = styled.div`
    
`;

export const Lines = styled.div`
    
`;

export const Space = styled.div`
    
`;