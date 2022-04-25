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

  const[open,setOpen] = useState(false);
  


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
  const [activeImageIndex, setActiveImageIndex] = useState(images[0]);

  
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
            <p >Casa recem formada, jardim impecável, garagens e vizinhança ótima, possui piscina e churrasqueira liberrados. Almoço por sua responsabilidade.</p>
            <h3>Localização:</h3>
            <p >--Mapa--</p>
            <h3 >Valor Diária:</h3>
            <p id="preco">R$100</p>
            <h4>+25 de taxa de manutenção</h4>

            <div className="buttons">
              <button onClick={() => setOpen(false)}>Voltar</button>
              <button id="interesse">Tenho Interesse</button>
            </div>
          </div>
        </div>
      :null}
    </Container>
  );


};

export default CardPropriedade;


