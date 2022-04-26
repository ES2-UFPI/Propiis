import Link from "next/link";
import Header from "../../components/Header";
import {Container, Corpo, Title} from "../../styles/ghHost";
import { BiArrowToLeft } from "react-icons/bi";


const GHHost = () => {

    return (
      <Container>
        <Corpo>
          
          <div className="voltar">
            <Link href="/perfil"> 
              <a>            
              <BiArrowToLeft  size={30} id="icon-voltar"/> 
              </a>
            </Link>
            Gerenciamento de hospedagens  Cliente
          </div>

          <Title>Hospedagens que solicitei</Title>
          <Title>Hospedagens Aceitas</Title>

        </Corpo>

      </Container>
    );
  };
  
  export default GHHost;