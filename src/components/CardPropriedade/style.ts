import styled from 'styled-components';

export const Container = styled.div` 
    background: #FFFFFF;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 800px;
    height: 190px;

    display: flex;
    
    gap: 15px;

    img#photo{
        height: 100%;
        width: 230px;
        border-radius: 20px;
    }

    .data{
        width: 100%;
        .botao1{
            background: "#E32A51";
        }

        h2{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 1rem;
            

            color: #7ADC4C;
        }

        h3{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 500;
            font-size: 0.9rem;
        }

        p{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 1rem;
        }

        h1{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 1rem;

            color: black;
        }

        .quant{
            display: flex;
            align-items: center;
            gap: 3px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 0.9rem;

            #bed{
                margin-left: 10px;
            }
        }

        .botoes{
            display: flex;
            
            width: 100%;
            padding-right: 15px;
            justify-content: flex-end;
            gap: 10px;

            button{
                background: #47568A;
                padding: 5px 10px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 50px;
                border: none;
                outline: none;

                font-family: 'Manrope';
                font-style: normal;
                font-weight: 600;
                font-size: 1rem;

                color: #FFFFFF;
            }
            
            .botao1{
                background: #E32A51;
                
            }
        }

       
        

    }
`;



export const Button = styled.button`
`;