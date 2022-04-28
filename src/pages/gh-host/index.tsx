import Link from "next/link";
import Header from "../../components/Header";
import {BotaoCancelar, Card, Container, Corpo, Title} from "../../styles/ghHost";
import { BiArrowToLeft } from "react-icons/bi";
import { useEffect, useState } from "react";
import { setupApi } from "../../services/api";

let minhasSolicitacoes = [];
const GHHost = () => {

  const [isFound, setIsFound] = useState(false);
 
  
  async function loadData(){
    const api = setupApi();
    try{
      const result = await api.get(`/solicitacoes/recuperar/host?id=6269e853fc62aa367a36bbaf&status=Pendente`);
      
      //setSolicitacoes(result.data.solicitacoes);
      minhasSolicitacoes = result.data.solicitacoes;
      console.log(minhasSolicitacoes);
      setIsFound(true);
    }catch (e) {
      console.log(e);
    }
    
  }
  
  useEffect(() => {
    loadData();
    
   },[])

    return (
      <Container>
        <Corpo>
          
          <div className="voltar">
            <Link href="/perfil"> 
              <a>            
              <BiArrowToLeft  size={30} id="icon-voltar"/> 
              </a>
            </Link>
            Gerenciamento de hospedagens Host
          </div>

          <Title>Hospedagens solicitadas</Title>

          <Card>
            <div className="corpo">
              <div className="titulo">
                <h2>Cidade</h2>
                <h2>Chek-in</h2>
                <h2>Chek-out</h2>
                <h2>Valor</h2>
                <h2>Aceitar</h2>
                <h2>Cancelar</h2>
              </div>
             
              {isFound ?  
                <>
                  
                  {
                    minhasSolicitacoes.map(x => (
                      <div className="dados" key={x._id}>
                        <h3>{x.propriedade.localizacao.cidade}</h3>
                        <h3>
                          {  
                            x.periodo.inicio[8] + "" + 
                            x.periodo.inicio[9] + "/" +
                            x.periodo.inicio[5] + "" +
                            x.periodo.inicio[6] + "/" +
                            x.periodo.inicio[0] + "" +
                            x.periodo.inicio[1] + "" +
                            x.periodo.inicio[2] + "" +
                            x.periodo.inicio[3] + ""
                          }
                        </h3>
                        <h3>
                          {  
                            x.periodo.fim[8] + "" + 
                            x.periodo.fim[9] + "/" +
                            x.periodo.fim[5] + "" +
                            x.periodo.fim[6] + "/" +
                            x.periodo.fim[0] + "" +
                            x.periodo.fim[1] + "" +
                            x.periodo.fim[2] + "" +
                            x.periodo.fim[3] + ""
                          }</h3>
                        <h3>R$ {x.valor_total}</h3>
                        <BotaoCancelar background="#47568A">Aceitar</BotaoCancelar>
                        <BotaoCancelar background="#E32A51">Cancelar</BotaoCancelar>
                      </div> 
                    ) )
                    
                  }

                </>
                :
                <>
                  <div className="dados" >
                      <h3>São Francisco</h3>
                      <h3>29/05/22</h3>
                      <h3>02/06/22</h3>
                      <h3>R$ 110,00</h3>
                      <BotaoCancelar background="#47568A">Aceitar</BotaoCancelar>
                      <BotaoCancelar background="#E32A51">Cancelar</BotaoCancelar>
                    </div> 

                    <div className="dados">
                      <h3>São Francisco</h3>
                      <h3>29/05/22</h3>
                      <h3>02/06/22</h3>
                      <h3>R$ 110,00</h3>
                      <BotaoCancelar background="#47568A">Aceitar</BotaoCancelar>
                      <BotaoCancelar background="#E32A51">Cancelar</BotaoCancelar>
                    </div> 
                </>
              }

             
            </div>
          </Card>

          <Title>Hospedagens Aceitas</Title>

          <Card>
            <div className="corpo">
              <div className="titulo">
                <h2>Cidade</h2>
                <h2>Chek-in</h2>
                <h2>Chek-out</h2>
                <h2>Valor</h2>
                <h2>Pagamento</h2>
                <h2>Conversar</h2>
              </div>
              <div className="dados">
                <h3>São Paulo</h3>
                <h3>29/05/22</h3>
                <h3>02/06/22</h3>
                <h3>R$ 110,00</h3>
                <BotaoCancelar background="#33BB48">Pago</BotaoCancelar>
                <BotaoCancelar background="#E32A51">Conversar</BotaoCancelar>
              </div> 
              <div className="dados">
                <h3>São Paulo</h3>
                <h3>29/05/22</h3>
                <h3>02/06/22</h3>
                <h3>R$ 110,00</h3>
                <BotaoCancelar background="#FB6900">Pendente</BotaoCancelar>
                <BotaoCancelar background="#E32A51">Conversar</BotaoCancelar>
              </div> 
              <div className="dados">
                <h3>São Paulo</h3>
                <h3>29/05/22</h3>
                <h3>02/06/22</h3>
                <h3>R$ 110,00</h3>
                <BotaoCancelar background="#FB6900">Pendente</BotaoCancelar>
                <BotaoCancelar background="#E32A51">Conversar</BotaoCancelar>
              </div> 
              <div className="dados">
                <h3>São Paulo</h3>
                <h3>29/05/22</h3>
                <h3>02/06/22</h3>
                <h3>R$ 110,00</h3>
                <BotaoCancelar background="#FB6900">Pendente</BotaoCancelar>
                <BotaoCancelar background="#E32A51">Conversar</BotaoCancelar>
              </div> 

             
            </div>

            <div className="valor-total">
              <p>
                Receberá total: <h3>$330,00</h3>
              </p>
              <p>
                Recebido até agora: <h3>$130,00</h3>
              </p>
            </div>
          </Card>
        </Corpo>

      </Container>
    );
  };
  
  export default GHHost;