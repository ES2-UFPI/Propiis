import Link from "next/link";
import { useState } from "react";
import { Container} from "./style";
import { MdBedroomParent, MdShower } from 'react-icons/md';

interface CardProps  {
  title?: string;
  srcImg?: string; 
  price?: number;
  taxa?: number;
  description?: string;
  shower?: number;
  bedrooms?: number;
}

/*const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
let idx = 0;

function carrossel(){
  idx++;

  if(idx > img.length -1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);*/


const CardPropriedade = ({
  title = "",
  srcImg = "", 
  price = 0,
  taxa = 0,
  description = "",
  shower = 0,
  bedrooms = 0,
  ...rest
}: CardProps) => {

    const[open,setOpen] = useState(false);


  
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
          
          <button >tenho interesse</button>
        </div>
      </div>

      
      {open?
        <div id="modal-info" className="modal-container">
        <div className="modal">
          <button className="fechar" onClick={() => setOpen(false)}>x</button>
          <h3 className="info">Descrição:</h3>
          <p className="info">Casa recem formada, jardim impecável, garagens e vizinhança ótima, possui piscina e churrasqueira liberrados. Almoço por sua responsabilidade.</p>
          <h3 className="info">Localização:</h3>
          <p className="info">--Mapa--</p>
          <h3 className="info">Valor:</h3>
          <p className="info">R$100/dia</p>
        </div>
      </div>: null}
    </Container>
  );


};

export default CardPropriedade;

/* <div className="carrossel">
            <div className="img-container" id="img">
              <img src="./images/fotocasa2.svg"></img>
              <img src="./images/fotocasa1.svg"></img>
            </div>

          </div>
*/
