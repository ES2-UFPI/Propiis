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

    .modal-container{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal{
        background: white;
        border-radius: 30px;
        width: 50%;
        height: 50%;
        padding: 40px;
        border: 5px solid #4a3cff;
        position: relative;
    }

    .modal-container.mostrar{
        display: flex;
    }

    .fechar{
        position: absolute;
        top: 0px;
        right: 0px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 4px solid white;
        background: white;
        font-weight: 600;
        font-size: 1.5rem;

        cursor: pointer;
    }

    .carrossel{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;

        
        overflow: hidden;
        box-shadow: 2px 2px 4px black;
        height: 400px;
        width: 400px;
    }

    .img-container{
        display: flex;
        transition: transform 0.5s ease-in-out;
        transform: translateX(0);
    }

    .img{
        object-fit: cover;
        height: 400px;
        width: 400px;
    }

    .info{
        display: flex;
        margin-top: 10px;
    }
   }
`;



export const Button = styled.button`
`;