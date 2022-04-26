import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Corpo } from "../../styles/mapa";
import { cidades } from '../../utils/cidades';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AiOutlineSearch } from "react-icons/ai";
import Router, { useRouter } from "next/router";
import router from "next/router";

const Mapa = () => {
  const [ mapa, setMapa ] = useState([]);
  const [value, setValue] = useState("");
  const [cidade, setCidade] = useState("");

  const MapWithNoSSR = dynamic(() => import("./Map"), {
    ssr: false
  });

  var dataCity = [];

  function pushDataCity (){
    setCidade(value);
    
    
    dataCity = cidades(cidade);
    console.log(dataCity);
  }
  
  
  const router = useRouter();
  const cordenadas = router.query.cordenadas;
  
  let c1 :string[] ,c2 :string[];
  
  const [c1String, c2String ] = (cordenadas as string).split('@');
  console.log("c1:string " + c1String);
  console.log("c2:string " + c2String);

  /*function separar(){
    let i : number;
    let estado = true;

    for (i = 0; i < cordenadas.length; i++){
      if(estado){
        c1.push(cordenadas[i]);
        if(cordenadas[i] == '@'){
          estado = false;
        }
      }else{
        c2.push(cordenadas[i]);
      }
    } 

    c1.pop();
    console.log(c1);
    console.log(c2);
  }
  
  separar();*/

  let c1Number = parseInt(c1String);
  let c2Number = parseInt(c2String);

  return (
    <Container>
      <Corpo>
        <Header />
      </Corpo>
          
      <div className="mapa">
        <MapWithNoSSR 
          nome={""}  
          latitude = {c1Number}
          longitude = {c2Number} 
          z={12}
        />
      </div>
      

      <Footer />
    </Container>
  );
};

export default Mapa;
