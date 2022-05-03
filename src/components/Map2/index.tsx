import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Leaflet from 'leaflet'; 

import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

interface PropsMap  {
    nome: string;
    latitude: number;
    longitude: number;
    z: number;
}

const Map = ({
    nome = "Teresina",
    latitude = -5.0930534,
    longitude = -42.8180693,
    z = 13,
  ...rest
}: PropsMap) => {

    const [ tam, setTam ]= useState(z);

    const mapIcon = Leaflet.icon({
        iconUrl: "/icons/pin.svg",

        iconSize: [50,50],
        iconAnchor: [25,50],
        popupAnchor: [170,8],
    })

    return (
        <MapContainer 
        center={[latitude,longitude]}
        zoom={tam}
        style={{ winth: '100%', height: '100%' }}
        
        >
        {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
        <TileLayer 
            
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicHJvcGlpcyIsImEiOiJjbDE4YTBkYngwNGFmM2Nxa3QxcmQ3MWo3In0.SSRlyXbIK7L6tAGQw92-tg`} 
        
        />
        <Marker
            icon={mapIcon}
            position={[-5.08434,-42.81573]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Mansão no centro de Teresina
            </Popup>

        </Marker>

        <Marker
            icon={mapIcon}
            position={[-5.07595, -42.78635]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Quarto privado
            </Popup>

        </Marker>

        <Marker
            icon={mapIcon}
            position={[-5.07449, -42.78464]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Casa no Jockey
            </Popup>

        </Marker>

        <Marker
            icon={mapIcon}
            position={[-23.52748, -46.54611]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Casa na Penha
            </Popup>

        </Marker>

        <Marker
            icon={mapIcon}
            position={[-23.56371, -46.63472]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Kitnet
            </Popup>

        </Marker>

        <Marker
            icon={mapIcon}
            position={[-23.56558, -46.65143]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Apartamento completo
            </Popup>

        </Marker>

        <Marker
            icon={mapIcon}
            position={[-22.94486, -43.25513]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Mansão em Niteró
            </Popup>

        </Marker>

        <Marker
            icon={mapIcon}
            position={[-22.9143423, -43.2259243]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Próxima ao Maracanã e à estação
            </Popup>

        </Marker>
        </MapContainer>
    )
}

export default Map