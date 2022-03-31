import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .perfil{
        margin-top: 60px;
        margin-left: -900px;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 125%;
        text-align: center;
        color: #0B194A;
    }

    .hist{
        width: 281px;
        height: 35px;
        margin-left: -650px;
        margin-top: 60px;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 27.9583px;
        line-height: 125%;
        /* identical to box height, or 35px */

        text-align: center;

        /* azul escuro */

        color: #0B194A;
    }

    .top{
        display: flex;
    }

    .minhas-viagens{
        margin-left: -388px;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 125%;
        text-align: center;
        color: #0B194A;
    }

    .icons-agendadas-favoritas{
        width: 53px;
        height: 104px;
        margin-top: 84px;
        margin-left: -262px;
        list-style-type: none;
        border-right: 1px solid #d3d3d3;
        line-height: 45px;
        align-items: center;
    }

    .agendadas-favoritas{
        width: 116px;
        height: 33px;
        margin-left: 20px;
        margin-top: 75px;
        list-style-type: none;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 50px;

        text-align: left;
        color: #0B194A;
    }
`;

export const Corpo = styled.div`
    width: 1449px;
`;

export const MeuPerfil = styled.div` 
    width: 1020px;
    height: 320px;
    display: flex;
    margin-left: -60px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    .fotoPerfil{
        margin-top: 0px;
        margin-left: 60px;
        width: 20%;
    }

    .nome{
        width: 280px;
        height: 50px;
        margin-top: 50px;
        margin-left: 50px;

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
        margin-left: -262px;
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
        margin-left: 210px;
        margin-top: 60px;
        width: 120px;
        height: 34px;
        border-radius: 20px;

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
        margin-left: -280px;
        margin-top: 230px;
        height: 50px;
        width: 220px;
        border: none;
        background: #49A5E8;
        border-radius: 20px;

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
    width: 808px;
    height: 250px;
    display: flex;
    margin-left: 120px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    ul{
        margin-top: 30px;
        margin-left: 8px;
        list-style-type: none;
        line-height: 45px;
    }

    .historico{
        display: flex;
        .mini-foto{
            width:60px;
            height: 60px;
            margin-left: 0px;
            margin-top: 0px;
        }

        li{
            width: 170px;
            height: 33px;
            margin-left: -25px;
            margin-top: 6px;
            display: inline-block;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 1.4rem;
            text-align: center;

            color: #343837;
        }

        .preco{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 100;
            font-size: 1.3rem;
            text-align: center;

            color: #343837;
        }

        .stars > .star{
            width: 24px;
            height: 24px;
            display: inline-block;
        }
    }

`;
