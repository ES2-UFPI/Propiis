import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Corpo } from "../../styles/mapa";
import { cidades } from '../../utils/cidades';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AiOutlineSearch } from "react-icons/ai";

const Mapa = () => {
  const [ mapa, setMapa ] = useState([]);
  const [value, setValue] = useState("");
  const [cidade, setCidade] = useState("");

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

  

  var dataCity = [];

  function pushDataCity (){
    setCidade(value);
    
    
    dataCity = cidades(cidade);
    console.log(dataCity);
  }


  return (
    <Container>
      <Corpo>
        <Header />
      </Corpo>

      {/*<form id="cidade-value">
        <input value={value} onChange={ (e) => setValue(e.target.value)} />
        <button onClick={ ()=> pushDataCity()}>
          <AiOutlineSearch color="#FFFFFF" size={24}/>
        </button>
      </form>*/}
      
      
      <div className="mapa">
        <MapWithNoSSR 
          nome={dataCity[0]}  
          latitude = {dataCity[1]}
          longitude = {dataCity[2]} 
          z={dataCity[3]}
        />
      </div>
      

      <Footer />
    </Container>
  );
};

export default Mapa;
