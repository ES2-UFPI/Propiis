import Link from "next/link";
import { useState } from "react";
import { Container, ExtraModal} from "./style";
import { MdBedroomParent, MdShower } from 'react-icons/md';
import dynamic from "next/dynamic";
import router from "next/router";
import {IoMdReturnLeft} from "react-icons/io";
import { setupApi } from "../../services/api";
interface CardProps  {
  title?: string;
  srcImg?: string;
  listImg?: string[]; 
  price?: number;
  taxa?: number;
  description?: string;
  shower?: number;
  bedrooms?: number;
  cordinates?: number[];
  myId?: string;
  localizacao?: string;
}


const MapWithNoSSR = dynamic(() => import("../../components/Map2"), {
  ssr: false
});



const CardPropriedade = ({
  title = "",
  srcImg = "",
  listImg= ["./temporarios/foto_casa.png"], 
  price = 0,
  taxa = 0,
  description = "",
  shower = 0,
  bedrooms = 0,
  cordinates = [0,0],
  localizacao= "",
  myId= "",
  ...rest
}: CardProps) => {

  const[open,setOpen] = useState(false);

  const[openMap, setOpenMap] = useState(false);

  


  var images = [ 
    './temporarios/foto_casa.png',
    './temporarios/banheiro1.webp',
    './temporarios/banheiro_2_1.jpg',
    './temporarios/cozinha_1.jpg',
    './temporarios/garagem_1.jpg',
    './temporarios/quarto_1_1.jpg',
    './temporarios/quarto_2_1.jpg',
    './temporarios/sala_1.jpg',
    
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(listImg[0]);

  if(listImg != ["./temporarios/foto_casa.png"]){
    images = listImg;
  }

  async function prestarSolicitacao(){
    const api = setupApi();
    try{
      const result = await api.post(`/solicitacoes/solicitar`,
        {
          "user": {
            "nome": "Marcos",
            "telefone": "11111111111",
            "imagem_perfil": "",
            "id": "6269e837fc62aa367a36bbad"
          },
          "user_host": {
            "nome": "Tiago",
            "telefone": "77777777777",
            "imagem_perfil": "",
            "id": "6269e853fc62aa367a36bbaf"
          },
          "propriedade": {
            "titulo": title,
            "fotos": listImg,
            "localizacao": {
              "endereco": "", 
              "cidade": localizacao, 
              "estado": ""
            },
            "id": myId
          },
          "periodo": {
            "inicio": "2022-05-05",
            "fim": "2022-06-27"
          },
          "valor_total": 5000
        }
      );
      alert("proposta realizada com sucesso\ncheque o status da proposta na pagina de\n minhas hospedagens");
      setOpen(false)
    }catch (e) {
      console.log(e);
    }
    
  }

  return (
    <Container>
      <img src={srcImg == "" ? "./images/fotoCasa.svg" : srcImg} alt="photo" id="photo"/>
      <div className="data">
        <h1>{title}</h1>
        <h2>preço: R$ {price},00</h2>
        <h3 >taxa de manutencao: R$ {taxa * price}</h3>
        <p>{description}</p> 
        
        <div className="quant">
          <MdShower size={24} color="black"/>
          {shower}
          <MdBedroomParent size={24} color="black" id="bed" />
          {bedrooms}
        </div>

        <div className="botoes">
          <button className="botao1" onClick={() => setOpen(true)}> +informações</button>

          <button  onClick={() => prestarSolicitacao()}>tenho interesse</button>
        </div>
      </div>

      {open?(
        <div id="modal-info" className="modal-container">
          <ExtraModal>
            <div className="modal">
              <button 
                className="fechar" 
                onClick={openMap ? ()=> setOpenMap(false) : () => setOpen(false)}
              >
                {openMap ? 
                  <IoMdReturnLeft size={30}/>
                : "x"
                }
              </button>
              
              {!openMap ? 
                <>
                <img src={activeImageIndex} id='principal' />

                <div className='album'>
                  <div className="fotos">
                        {images.map((index) =>{
                          return (
                            <button
                              className={activeImageIndex == index ? 'active' : ''}
                              type="button"
                              onClick={() => {
                                setActiveImageIndex(index);
                              }}
                              >
                              <img src={index}/>
                            </button>
                          );
                        })}
                    </div>
                </div>

                <h3 >Descrição:</h3>
                <p>
                  {
                    description == "" ? 
                    "Casa recem formada, jardim impecável, garagens e vizinhança ótima."
                    : description
                  }
                </p>
                <h1>{title}</h1>
                <div className="quant">
                  <MdShower size={24} color="black"/>
                  {shower}
                  <MdBedroomParent size={24} color="black" id="bed" />
                  {bedrooms}
                </div>

                <h3>Localização:</h3>
                
                <img 
                  src="./images/imagem-mapa.jpeg" 
                  alt="mapa" 
                  id="imagem-mapa"
                  onClick={ () => setOpenMap(true)}
                />

                <h3 >Valor Diária:</h3>
                <p id="preco">R${price == 0 ? " 100": " " +price }</p>
                <h4>{taxa == 0 ? "+ R$ 25" : "+ R$ "+ taxa * price} de taxa de manutenção</h4>
                
              

                <div className="buttons">
                  <button onClick={() => setOpen(false)}>Voltar</button>
                  <button 
                  id="interesse"
                  onClick={() => prestarSolicitacao()}
                  >
                    Tenho Interesse</button>
                </div>
                </>
              : 
                <div className="mapa">
                  <MapWithNoSSR 
                  nome={""}  
                  latitude = {cordinates[0]}
                  longitude = {cordinates[1]} 
                  z={14}
                  />
                </div>
              }
            </div>
          </ExtraModal>
        </div>)

      :null}
    </Container>
  );


};

export default CardPropriedade;


