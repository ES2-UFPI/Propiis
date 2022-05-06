import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1.titulo{
        display: flex;
        margin: 20px 0px 20px 120px;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        
        text-align: left;
        color: #0B194A;
    }

    .top{
        display: flex;
        width: fit-content;
        gap: 10px;
        
    }

    .viagens{
        margin-left: 20px;
        
        ul{
            margin-top: 10px;
            display: flex;
            gap: 10px;
            align-items: center;

            img{
                width: 30px;
            }

            li{
                list-style-type: none;
            }
        }
    }
`;

export const Corpo = styled.div`
    width: 100%;

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

export const MeuPerfil = styled.div` 
    width: 800px;
    height: 320px;
    display: flex;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    .fotoPerfil{
        margin-top: 0px;
        margin-left: 30px;
        width: 20%;
    }

    h2.nome{
        width: 280px;
        height: 50px;
        margin-top: 50px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 125%;
        text-align: center;
        color: #0B194A;
    }

    .dados{
        width: 85px;
        height: 110px;
        margin-top: 114px;
        margin-left: -202px;
        list-style-type: none;
        border-right: 1px solid #d3d3d3;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1 rem;
        line-height: 35px;
        align-items: center;


        color: #0B194A;
    }

    .pessoal{
        width: 200px;
        height: 110px;
        margin-top: 114px;
        margin-left: 20px;
        list-style-type: none;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1 rem;
        line-height: 35px;
        align-items: center;

        color: #0B194A;
    }

    .editar:hover{
        background: #e7e7e7;
    }

    .editar{
        position: relative;
        right: -160px;
        top: 10px; 
        width: 120px;
        height: 34px;
        border-radius: 10px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 1.0rem;
        border-color: #e7e7e7;
        color: black;

        border: 2px solid #000000;
        background-color: white;
    }

    .icon-editar{
        margin-top: 0px;
        margin-left: 8px;
        width: 11%;
    }

    .alterar{
        position: relative;
        right: 20px;
        top: 250px; 

        height: 50px;
        width: 220px;
        border: none;
        background: #49A5E8;
        border-radius: 10px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        color: white;
    }

    .alterar:hover{
        background: #2894e3;
    }

    .alterar-foto{
        margin-left: -50px;
        margin-top: 220px;
        height: 30px;
        width: 30px;
        border: 2px solid #000000;
        align-items: center;

        background: #ffffff;
        border-radius: 20px;

        img{
            margin-top: 0px;
            margin-left: 1px;
            width: 50%;
        }
    }
`;

export const Historico = styled.div`
    width: 670px;
    height: 220px;
    display: flex;
    

    background: #FFFFFF;
    
    border-radius: 20px;
    padding: 20px;
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

    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        

        ul.historico{
            flex-direction: row;
            align-items: center;
            gap: 10px;

            img{

            }

            span{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 800;
                font-size: 1.2rem;

                text-align: center;


                color: #343837;
            }

            h3{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 1.1rem;

                color: #212529;

                border-left: 1px solid #bdbfc3;
                padding-left: 10px;
            }
        }
    }

`;


export const BotaoAvaliar = styled.button`
    background: #FFFFFF;

    border: 1px solid #0B194A;
    box-sizing: border-box;
    border-radius: 10px;

    padding: 5px 15px;

    display: flex;
    align-items: center;
    justify-content:center;
    gap: 10px;

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

export const Extra = styled.div`
    background: #FFFFFF;
    border-radius: 20px;
    padding: 10px;
    width: fit-content;
    width: 700px;
    height: fit-content;

    margin-left: 120px;
    margin-bottom: 210px; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
`;