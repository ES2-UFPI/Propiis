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
            padding-bottom: 30px;
            background: white;
            border-radius: 30px;
            width: 890px;
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
            
            height: 90vh;
            
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            img#principal {
                margin: 20px auto 5px auto;
                border-radius: 15px;
                max-width: 65%;
                height: 320px;
                display: flex;
                object-fit: cover;
            }

            .album{
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .fotos {
                    display: flex;
                    gap: 15px;
                    
                    margin: 16px 40px 0;
                    button {
                        border: 0;
                        height: 88px;
                        background: none;
                        cursor: pointer;
                        border-radius: 20px;
                        overflow: hidden;
                        outline: none;
                        
                        opacity: 0.6;
                        img {
                            width: 100%;
                            height: 88px;
                            object-fit: cover;
                            
                        }
                    }
                    
                    button.active {
                        opacity: 1;
                    }
                }
            }

            img#imagem-mapa{
                cursor: pointer;
                width: 250px;
                height: 250px;
                object-fit: cover;
            }
            h3{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 1.8rem;

                color: #0B194A;
                margin-top: 20px;
            }
            p{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 600;
                font-size: 1rem;
                width: 80%;
               
                text-align: center;

                color: #000000;
            }

            p#preco{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 600;
                font-size: 1.8rem;
                text-align: center;

                color: #7ADC4C;
            }
            h4{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 500;
                font-size: 1rem;
                color: rgba(0, 0, 0, 0.6);
            }

            .quant{
                display: flex;
                align-items: center;

                margin-top: 10px;
                #bed{
                    margin-left: 10px;
                }
            }

            .buttons{
                display: flex;
                gap: 10px;
                margin-top: 20px;
                
                button{
                    background: #E32A51;
                    border-radius: 20px;
                    width: 200px;
                    padding: 8px 0px;

                    border: none;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 800;
                    font-size: 1.1rem;
                    text-align: center;

                    color: #FFFFFF;
                }
                button#interesse{
                    background: #47568A;
                }
            }

            .mapa{
                margin-top: 40px;
                z-index: 1;
                width: 90%;
                height: 95%;
                border-radius: 20px;

                .popup-marker{
                    .leaflet-popup-content-wrapper{
                        background: rgba(255, 255, 255, 0.9);
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;
                    }

                    .leaflet-popup-content {
                        color:#60696B;
                        font-size: 16px;
                        font-weight: bold;
                        margin: 8px 12px;

                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        a {
                            width: 35px;
                            height: 35px;
                            background: #15c3d6;
                            border-radius: 12px;

                            display: flex;
                            justify-content: center;
                            align-items: center;
                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

                            img {
                                width: 22px;
                                height: 22px;
                            }
                        }
                    }

                    .leaflet-popup-tip-container {
                        display: none;
                    }
                }
            }
        }

        .modal-container.mostrar{
            display: flex;
        }

        .fechar{
            position: absolute;
            top: 0px;
            right: 10px;
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

        
    }
`;



export const Button = styled.button`
`;

export const ExtraModal = styled.div`
    background: #FFFFFF;
    border-radius: 20px;
    padding: 10px;

    
`;