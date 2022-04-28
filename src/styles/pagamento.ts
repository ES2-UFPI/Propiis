import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    padding-bottom: 100px;
   
`;


export const Corpo = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    
`;

export const Corpo2 = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 0px 0px 90px ;

    .voltar{
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;

        text-align: center;

        color: #17181A;
    }
    
    .inputs{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        input{
            border-radius: 8px;
        }
        .grid{
            input#1{
                border-radius: 8px 8px 0px 0px;
            }
            input#2{
                border-radius: 8px 8px 0px 0px;
            }
            input#3{
                border-radius: 8px 8px 0px 0px;
            }
        }

        .coluna{
            display: flex;
            flex-direction: column;
        }
    }

    .buttons{
        margin-top: 20px;
        display: flex;
        gap: 40px;

        button{
            background: #E32A51;
            border-radius: 10px;
            width: 230px;
            outline: none;
            border: none;
            padding: 10px 0px;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 1.3rem;
            text-align: center;

            color: #FFFFFF;
        }

        button.blue{
            background: #47568A;
        }
    }
`;

interface PropsCard{
    tam: string;
} 

export const Card = styled.div<PropsCard>`
    background: #FFFFFF;
    margin-top: 20px;
    border: 1px solid #8E8E8E;
    box-sizing: border-box;
    border-radius: 20px;

    width: ${ (props)=>props.tam == undefined ? "fit-content" : (props)=>props.tam } ;
    padding: 10px 15px;

    h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;

        color: #0B194A;
    }

    .viagem{
        margin-top: 10px;
        display: flex;
        gap: 50px;

        img{
            width: 150px;
            height: 150px;
        }
        
        .text{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center; 
            p{
                display: flex;
                gap: 10px;

                font-family: 'Manrope';
                font-style: normal;
                font-weight: 700;
                font-size: 1rem;
                line-height: 150%;
                /* or 24px */


                color: #071C1E;

                h3{
                    font-size: 1rem;
                }
            }
        }
    }

    .texto-precos{
        display: flex;
        flex-direction: column;
        gap: 5px;
        p{
            display: flex;
            justify-content: space-between;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 150%;

            color: #071C1E;
            h3{
                font-size: 1rem;
                font-style: normal;
            }
        }
    }
`;

export const CardButtons = styled.div<PropsCard>`
    margin-top: 20px;
    background: #FFFFFF;
    padding: 5px 0px; 

    box-shadow: 0px 0px 41px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    width: ${ (props)=>props.tam == undefined ? "fit-content" : (props)=>props.tam } ;

    display: flex;
    justify-content: space-between;

    button{
        width: 100%;
        padding: 10px 0px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 1.3rem;
        text-align: center;

        color: #212529;

        background: transparent;
        border: none;
        transition: ease-in-out 0.2s opacity;
        transition: ease-in-out 0.2s background;
        :hover{
            opacity: 0.8;
            background: #F0F0F0;
        }
    }

    button + button{
        border-left: 1px solid #424242;
    }

    button#1{
        border-left: 30px;
    }
    button#3{
        border-right: 30px;
    }
`;

interface PropsInput{
    tam: string;
    border:  string[];
} 

export const Input = styled.input<PropsInput>`
    background: #FFFFFF;
    border: 1px solid #8E8E8E;
    box-sizing: border-box;
    height: 40px;
    width: ${ (props)=>props.tam == undefined ? "fit-content" : (props)=>props.tam };
    
    padding: 0px 10px;
    outline: none;
`;

