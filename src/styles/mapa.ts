import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .mapa{
        width: 100%;
        height: 90vh;

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
`;


export const Corpo = styled.div` 
    width: 1449px;
`;