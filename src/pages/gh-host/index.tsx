import Link from "next/link";
import Header from "../../components/Header";
import {BotaoCancelar, Card, Container, Corpo, Title} from "../../styles/ghHost";
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

          <Card>
            <div className="corpo">
              <div className="coluna-dados">
                <h2>Cidade</h2>
                <h3>São Paulo</h3>
                <h3>São Paulo</h3>
                <h3>São Paulo</h3>
                <h3>São Paulo</h3>
                <h3>São Paulo</h3>
              </div>
              <div className="coluna-dados">
                <h2>Chenk-in</h2>
                <h3>29/05/22</h3>
                <h3>29/05/22</h3>
                <h3>29/05/22</h3>
                <h3>29/05/22</h3>
                <h3>29/05/22</h3>
              </div>
              <div className="coluna-dados">
                <h2>Chenk-out</h2>
                <h3>02/06/22</h3>
                <h3>02/06/22</h3>
                <h3>02/06/22</h3>
                <h3>02/06/22</h3>
                <h3>02/06/22</h3>
              </div>
              <div className="coluna-dados">
                <h2>Valor</h2>
                <h3>R$ 110,00</h3>
                <h3>R$ 110,00</h3>
                <h3>R$ 110,00</h3>
                <h3>R$ 110,00</h3>
                <h3>R$ 110,00</h3>
              </div>
              {/*<div className="coluna-botoes">
                <BotaoCancelar>Cancelar</BotaoCancelar> 
                <BotaoCancelar>Cancelar</BotaoCancelar> 
                <BotaoCancelar>Cancelar</BotaoCancelar> 
                <BotaoCancelar>Cancelar</BotaoCancelar> 
                <BotaoCancelar>Cancelar</BotaoCancelar> 
              </div>*/}
            </div>
          </Card>

          <Title>Hospedagens Aceitas</Title>

        </Corpo>

      </Container>
    );
  };
  
  export default GHHost;