import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const Corpo = styled.div`
    width: 1449px;
`;

export const LoginUsuario = styled.div`
    width: 530px;
    height: 600px;
    margin-top: 198px;
    margin-left: 25%;
    display: flex;
    background: #fdfdfd;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    .logo{
        width: 288px;
        height: 120px;
        margin-top: 0px;
        margin-left: 25%;
    }

    .email{
        box-sizing: border-box;
        width: 330px;
        height: 50px;
        margin-left: -300px;
        margin-top: 160px;
        border: none;
        border-radius: 20px;
        background: #d8d8d8;
        padding-left: 20px;

        ::placeholder{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 1.1rem;
            padding: 0px;
        }
    }

    .senha{
        box-sizing: border-box;
        width: 330px;
        height: 50px;
        margin-left: 10px;
        margin-top: 220px;
        border: none;
        border-radius: 20px;
        background: #d8d8d8;
        padding-left: 20px;

        ::placeholder{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 1.1rem;
            padding: 0px;
        }
    }

    .icon-email{
        width: 30px;
        height: 30px;
        margin-top: 170px;
        margin-left: -370px;
    }

    .icon-senha{
        width: 30px;
        height: 30px;
        margin-top: 230px;
        margin-left: -370px;
    }

    a{
        width: 220px;
        height: 50px;
        margin-top: 300px;
        margin-left: 148px;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 1.0rem;
        line-height: 0px;
        text-align: center;
        color: #0B194A;
    }

    .login{
        margin-top: 338px;
        margin-left: -363px;
        width: 330px;
        height: 60px;
        border: none;
        background: #49A5E8;
        border-radius: 20px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        color: white;


    }

    .criar{
        margin-top: 415px;
        margin-left: -330px;
        width: 330px;
        height: 60px;
        border: none;
        background: #041726;
        border-radius: 20px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        color: white;


    }

    .criar:hover{
        background: #020c13;
    }

    .login:hover{
        background: #2894e3;
    }

`; 