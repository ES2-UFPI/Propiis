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

export const Card = styled.div`
    margin-top: 20px;
    background: #FFFFFF;
    width: 100%;

    box-shadow: 0px 0px 41px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: 10px 20px;
    

    div.corpo{
        width: 100%;
        display: flex;
        
        flex-direction: column;
        gap: 10px;
        padding-right: 15px;
        height: 150px;
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

        div.titulo{
            display: flex;
            justify-content: space-between;
            margin-right: 12px;

            h2{
                width: 100px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 1rem;

                color: #212529;
                margin-bottom: 10px;
            }
        }

        div.dados{
            display: flex;
            justify-content: space-between;
            margin-right: 0px;

            h3{
                width: 100px;
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: 0.8rem;

                color: #000000;
            }

            
        }
    }
    div.coluna-dados{
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 20px;
        
        h2{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 1rem;

            color: #212529;
            margin-bottom: 10px;
        }

        h3{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 0.8rem;

            color: #000000;
        }
    }

    div.coluna-botoes{
        display: flex;
        flex-direction: column;
        padding-top: 48px;
        gap: 14px;
    }

    div.valor-total{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-top: 15px;
        p{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;

            color: #212529;
            display: flex;
            align-items: center;
            gap: 10px;

            h3{
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;

                color: #33BB48;
            }
        }
        
    }
`;

interface BotaoProps{
    background: string;

}

export const BotaoCancelar = styled.button<BotaoProps>`
    width: 80px;
    margin: 0px 30px 0px 0px;
    background: ${(props)=>props.background};
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;

    color: #FFFFFF;

    border: none;

`;