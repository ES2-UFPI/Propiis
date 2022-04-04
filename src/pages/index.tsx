import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Corpo, Pesquisa, Sugestoes } from "../styles/home";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {AiFillCloseCircle } from 'react-icons/ai';
import axios from "axios";
import { setupApi } from "../services/api";


const Home: NextPage = () => {
  const [value, onChange] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  const [localizacao, setLocalizacao] = useState("");
  const [hospedes, setHospedes] = useState(0);

  const [openCalendar, setOpenCalendar] = useState(false);
  const [openCalendar2, setOpenCalendar2] = useState(false);
  const [valorInput1, setValorInput1] = useState("");
  const [valorInput2, setValorInput2] = useState("");


  function dadosDate(){
    var valores = value.toString();
    var [ diaSemanal, mes, diaMensal, ano, ...rest] = valores.split(' ');
    console.log(diaMensal, mes, ano);
    setValorInput1(diaMensal + " " + mes + " "+ ano);
    setOpenCalendar(false);
  }

  function fecharDate(){
    setValorInput1("");
    setOpenCalendar(false);
    onChange(new Date());
  }

  function dadosDate2(){
    var valores = value2.toString();
    var [ diaSemanal, mes, diaMensal, ano, ...rest] = valores.split(' ');
    console.log(diaMensal, mes, ano);
    setValorInput2(diaMensal + " " + mes + " "+ ano);
    setOpenCalendar2(false);
  }

  function fecharDate2(){
    setValorInput2("");
    setOpenCalendar2(false);
    onChange2(new Date());
  }

  async function handleSubmit(){
    const api = setupApi();
    const result = await api.get(`propriedades/${localizacao}`);
    console.log(result.data);
    
  }

  return (
    <Container>
      <Corpo>
        <Header></Header>
      </Corpo>

      <img className="fotohome" src="./images/background-pic.svg" alt="" />

      <Corpo>
        <Pesquisa>
          <div className="filtro">
            Localização? 
            <input 
              placeholder="Ex: Rio de Janeiro"
              onChange={(e) => setLocalizacao(e.target.value)}
              value={localizacao} 
            />
          </div>

          <div className="filtro">
            Check-in? 
            <input 
              placeholder="Quando?" 
              value={valorInput1}
              onClick={ ()=> setOpenCalendar(true)}
              />
          </div>
          
          <div className="filtro">
            Check-out? 
            <input 
              placeholder="Quando?" 
              value={valorInput2}
              onClick={ ()=> setOpenCalendar2(true)}
            />
          </div>

          <div 
            className="filtro">
              Hóspedes 
            <input 
              placeholder="Ex: 3" 
              type="number"
            />
          </div>

          <button
            onClick={ () => handleSubmit()}
          >Buscar
          </button>
        </Pesquisa>

        <div className="calendarios">
        
        {openCalendar ? 
          <div className="calendario" id="1">
            <div className="botoes">
              <button id="close-icon" onClick={() => fecharDate()}> cancelar</button>
              <button id="close-icon" onClick={() => dadosDate()}> confirmar</button>
            </div>
            <Calendar onChange={onChange} value={value}/>
          </div>
          : null
        }

        {openCalendar2 ? 
          <div className="calendario2" id="2"> 
            <div className="botoes">
              <button id="close-icon" onClick={() =>  fecharDate2()}> cancelar</button>
              <button id="close-icon" onClick={()=> dadosDate2()}> confirmar</button>
            </div>
            <Calendar onChange={onChange2} value={value2}/>
          </div>
          : null
        }
        </div>
         
          <Sugestoes>
            <div className="texto">Encontre os melhores imóveis para o seu conforto</div>
            <div className="texto_menor">Dê uma olhada em algumas sugestões</div>
            
          </Sugestoes>

      </Corpo>

      <Footer></Footer>
    </Container>

    

  );
};

export default Home;
