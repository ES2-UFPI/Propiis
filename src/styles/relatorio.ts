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
            padding-bottom: 30px;
            background: white;
            border-radius: 30px;

            width: 700px;
            overflow-y: auto;
            height: 500px;
            
            position: relative;
            display: flex;
            flex-direction: column;

            p{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 600;
                font-size: 1rem;
                width: 80%;
               
                text-align: center;

                color: #000000;
            }

            h3{
                margin-left: 60px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 1.8rem;

                color: #0B194A;
                margin-top: 20px;
            }

            .avaliacao{
                display: flex;
                align-items: left;

                width: 200px;
                height: 50px;
                
                margin-top: 20px;
                margin-left: 60px;

                box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
            }

            .comentario{
                display: flex;
                align-items: left;

                width: 500px;
                height: 200px;
                
                margin-top: 20px;
                margin-left: 60px;

                box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);

                textarea{
                    width: 100%;
                    outline: none;
                    border: none;
                    padding-left: 10px;
                    padding-top: 10px;
                }
            }
            .botaoAvaliar{
                display: flex;
                width: 100%;
                justify-content: right;

                padding-right: 30px;
                .botao-avaliar{
                    margin-top: 20px;
                    width: 150px;
                    height: 50px;
                    border: none;
                    background: #49A5E8;
                    border-radius: 10px;

                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.3rem;
                    color: white;

                    :hover{
                        opacity: 80%;
                    }   
                }
            }
        }

        .fechar{
            position: absolute;
            top: 0px;

            right: 10px;

            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 4px solid white;
            background: white;
            font-weight: 600;
            font-size: 1.5rem;

            cursor: pointer;
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
export const Avaliado = styled.div`
    background: #FFFFFF;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 5px; 

    div#1{
        background: blue;
        margin-left: 200px; 
    }
`;