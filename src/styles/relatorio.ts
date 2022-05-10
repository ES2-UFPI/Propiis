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

    

    .title{
        display: flex;
        width: 100%;
        margin-bottom: 10px;
        
        justify-content: space-between;

        .left{
            display: flex;
        }
    }

    
`;

export const BodyCard = styled.div`
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
`;

interface propLines {
    background: string;
}

export const Lines = styled.div<propLines>`
    width: 99%;
   
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${ props=> props.background}; 

    .left{
        display: flex;
        align-items: center;
    }
    
`;

export const Space = styled.div`
    width: 120px;
    

    img{
        width: 45px;
        height: 45px;
    }

    h2{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 800;
        font-size: 1rem;
        line-height: 125%;
        /* identical to box height, or 28px */

        text-align: center;

        /* background black */

        color: #343837;
    }

    h3{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 24px;

        color: #000000;
    }

    button{
        background: #FFFFFF;

        border: 1px solid #0B194A;
        border-radius: 8px;

        display: flex;
        align-items: center;
        padding: 0px 10px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.8rem;

        color: #343837;
    }
`;

export const Card2 = styled.div`
    margin-top: 20px;
    width: 592px;
    height: 200px;
    padding: 10px 20px;

    border: 1px solid #8E8E8E;
    border-radius: 30px;

    h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;

        color: #0B194A;
    }

    .corpo{
        display: flex;
        flex-direction: column;
        height: 80px;
        margin-top: 10px;

        padding-right: 10px;
        
        .line{
            display: flex;
            justify-content: space-between;
        }

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
    }
    .resultado{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        padding-right: 16px;
    }
`;