import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    height: 346px;

    background: #4A598F;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Body = styled.div`
    max-width: 1449px;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .logo{
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        img{
            width: 150.06px;
            height: 53px;
            cursor: pointer;  
        }

        h2{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 150%;
            width: 150px;

            color: #FFFFFF;

        }
    }

    .pages{
        margin-left: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top{
            display: flex;
            justify-content: space-between;
            li{
                list-style-type: none;

                font-family: 'Manrope';
                font-style: normal;
                font-weight: 500;
                font-size: 1.4rem;

                color: #FFFFFF;
                cursor: pointer; 
            }
        }

        .bottom{
            display: flex;
            gap: 5px;

            justify-content: space-between;
            li{
                list-style-type: none;

                font-family: 'Manrope';
                font-style: normal;
                font-weight: 500;
                font-size: 1.4rem;

                color: #FFFFFF;
                cursor: pointer; 
                border-left: 1px solid transparent;
            }

            li.borda{
                padding: 5px;
                border-left: 1px solid #FFFFFF;
            }

            li.sem-borda{
                padding: 5px;
                border-left: 1px solid transparent;
            }

        }
    }

    .redes-sociais{
        display: flex;
        flex-direction: column;
        gap: 10px;

        .rede{
            cursor: pointer;
            img{
                width: 24px;
                height: 24px;
            }
            display: flex;
            gap: 10px;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: -0.045em;

            color: #FFFFFF;
        }

        #facebook{
            img{
                width: 24px;
                height: 24px;
            }
        }

        button{
            width: 280px;
            height: 55px;

            background: #FFFFFF;
            border-radius: 12px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: -0.045em;

            color: #371E56;
        }
    }
`;