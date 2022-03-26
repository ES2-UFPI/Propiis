import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Leaflet from 'leaflet'; 

import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

const Map = () => {
    const [ tam, setTam ]= useState(14);

    const mapIcon = Leaflet.icon({
        iconUrl: "./icons/pin.svg",

        iconSize: [50,50],
        iconAnchor: [25,50],
        popupAnchor: [170,8],
    })

    return (
        <MapContainer 
        center={[-5.0930534,-42.8180693]}
        zoom={tam}
        style={{ winth: '100%', height: '100%' }}
        
        >
        {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
        <TileLayer 
            
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicHJvcGlpcyIsImEiOiJjbDE4YTBkYngwNGFmM2Nxa3QxcmQ3MWo3In0.SSRlyXbIK7L6tAGQw92-tg`} 
        
        />
        <Marker
            icon={mapIcon}
            position={[-5.0930534,-42.8180693]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Apartamento belo monte
            </Popup>

        </Marker>

        <Marker
            icon={mapIcon}
            position={[-5.062874, -42.789917]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Apartamento Santa Marta
            </Popup>

        </Marker>

        <Marker
            icon={mapIcon}
            position={[-5.073304, -42.820644]}
        >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="popup-marker">
            Casa Miramar
            </Popup>

        </Marker>
        </MapContainer>
    )
}

export default Map