import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Corpo } from "../../styles/mapa";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Mapa = () => {
  const [ mapa, setMapa ] = useState([]);

  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false
  });
  
  /*useEffect(() => {
    setMapa([
      <MapContainer
        center={[-5.0935648,-42.8112901]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </MapContainer>
    ]);
  }, []);*/

  return (
    <Container>
      <Corpo>
        <Header />
      </Corpo>

      <div className="mapa">
        <MapWithNoSSR />
      </div>
      

      <Footer />
    </Container>
  );
};

export default Mapa;
