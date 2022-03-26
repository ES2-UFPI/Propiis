import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    height: 76px;
    background: #FFFFFF;
    box-shadow: 0px 2.25px 4.5px rgba(180, 180, 180, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-around;

    img#logo{
        width: 150.06px;
        height: 53px;
        cursor: pointer;   
    }

    li{
        list-style-type: none;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;

        color: #371E56;
        cursor: pointer; 
    }

    div.menu-opcoes{
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer; 

        .border-image{
            width: 84px;
            height: 61px;
            background: #F3F3F3;
            border-radius: 40px;

            display: flex;
            align-items: center;
            justify-content: center ;
            
            img{
                width: 50px;
                height: 50px;
            }
        }

        text{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 1.1rem;

            color: #0B194A;
        }

        .space{
            width: 50px;
        }
    }

    .opcoes{
        position: relative;
        top: 200px;

        width: 331px;
        height: 448px;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
`;

export const Geral = styled.div`
    ul.opcoes{
        position: relative;
        top: 10px;
        left: 1000px;
        width: 331px;
        height: 248px;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;

        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        li{
            list-style-type: none;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 500;
            font-size: 1.4rem;

            color: #535C68;
            cursor: pointer; 
        }  

        li#sair{
            color: #EB4D4B;
        }
    }
`;