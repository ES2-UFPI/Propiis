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

  

  return (
    <Container>
      <img src={srcImg == "" ? "./images/fotoCasa.svg" : srcImg} alt="photo" id="photo"/>
      <div className="data">
        <h1>{title}</h1>
        <h2>preço diária: R$ {price},00</h2>
        <h3 >taxa diária: R$ {taxa * price}</h3>
        <p>{description}</p> 
        
        <div className="quant">
          <MdShower size={24} color="black"/>
          {shower}
          <MdBedroomParent size={24} color="black" id="bed" />
          {bedrooms}
        </div>

        <div className="botoes">
          <button className="botao1"> +informações</button>
          <button >tenho interesse</button>
        </div>
      </div>
    </Container>
  );
};

export default CardPropriedade;
