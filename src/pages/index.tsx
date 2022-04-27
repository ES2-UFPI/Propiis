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
import CardPropriedade from "../components/CardPropriedade";


interface PropriedadesProps{
  _id: string,
	titulo : string,
	descricao: string,
	fotos: string[],
  preco_diaria: number,
	taxa: number,
	quartos : number,
	banheiros : number,
	localizacao: {
    endereco: string,
    cidade: string,
    estado: string,
    coordinates: number[],
    type: string,
  },
	reservada: boolean;
}

var diamensal1, diamensal2;
var dict_meses = { 'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Nov': '10', 'Dec': '11'};
var data1, data2, diferenca; // para fazer a diferenca de datas


const Home: NextPage = () => {
  const [value, onChange] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  const [localizacao, setLocalizacao] = useState("");
  const [hospedes, setHospedes] = useState(0);

  const [openCalendar, setOpenCalendar] = useState(false);
  const [openCalendar2, setOpenCalendar2] = useState(false);
  const [valorInput1, setValorInput1] = useState("");
  const [valorInput2, setValorInput2] = useState("");

  const [isFound, setIsFound] = useState(false);
  const [propriedades, setPropriedades] = useState<PropriedadesProps[]>([]);

  function dadosDate(){
    var valores = value.toString();
    var [ diaSemanal, mes, diaMensal, ano, ...rest] = valores.split(' ');
    console.log(parseInt(diaMensal), dict_meses[mes], ano);
    setValorInput1(diaMensal + " " + mes + " " + ano);
    diamensal1 = parseInt(diaMensal);
    data1 = new Date(ano + "/" + dict_meses[mes] + "/" + diaMensal)    //     "28/04/2022"
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
    console.log(parseInt(diaMensal), dict_meses[mes], ano);
    setValorInput2(diaMensal + " " + mes + " "+ ano);

    diamensal2 = parseInt(diaMensal);
    data2 = new Date(ano + "/" + dict_meses[mes] + "/" + diaMensal)    //     "30/04/2022"

    diferenca = (data2.getTime() - data1.getTime()) / (1000 * 3600 * 24);

    setOpenCalendar2(false);
  }


  function fecharDate2(){
    setValorInput2("");
    setOpenCalendar2(false);
    onChange2(new Date());
  }

  async function handleSubmit(){
    const api = setupApi();
    try{
      const result = await api.get(`propriedades/cidade?cidade=${localizacao}&inicio=2022-05-13&fim=2022-05-18`);
      setPropriedades(result.data.propriedades);
      console.log(propriedades);
      setIsFound(true);
    }catch (e) {
      console.log(e);
    }
    
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
            <div className="texto_menor">{isFound ? `Dê uma olhada nas propriedades de ${localizacao}` : "Dê uma olhada em algumas sugestões"}</div>




            {isFound ?  
              <>
                
                {
                  propriedades.map(x => (
                    
                    <CardPropriedade 
                      key={x._id}
                      title={x.titulo}
                      srcImg={x.fotos[0]}
                      listImg={x.fotos}
                      price={x.preco_diaria * diferenca}
                      taxa={x.taxa * x.preco_diaria * diferenca}
                      description={x.descricao}
                      shower={x.banheiros}
                      bedrooms={x.quartos}
                      cordinates={x.localizacao.coordinates}
                    />
                  ) )
                  
                }

              </>
              :
              <>
              <CardPropriedade 
                title="Apartamento completo na Grande São Paulo"
                price={diferenca * 100}
                taxa={0.2}
                description="Casa rececem reformada, jardim impecável, garagens em boa condições, área de lazer e playground para as crianças"
                shower={2}
                bedrooms={2}
              />

              <CardPropriedade 
                title="Apartamento completo na Grande São Paulo"
                price={100}
                taxa={20}
                description="Casa rececem reformada, jardim impecável, garagens em boa condições, área de lazer e playground para as crianças"
                shower={2}
                bedrooms={2}
              />
              </>
            }

            
            
            
          </Sugestoes>

      </Corpo>
      <button onClick={()=> console.log(diferenca)}>Console</button>
      <Footer></Footer>
    </Container>

    

  );
};

export default Home;
