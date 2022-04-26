import Link from "next/link";
import Header from "../../components/Header";
import {Container, Corpo} from "../../styles/ghHost";
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
        </Corpo>
      </Container>
    );
  };
  
  export default GHHost;