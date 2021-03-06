import Link from "next/link";
import Header from "../../components/Header";
import {BotaoCancelar, Card, Container, Corpo, Title} from "../../styles/ghCliente";
import { BiArrowToLeft } from "react-icons/bi";
import { setupApi } from "../../services/api";
import { useEffect, useState } from "react";
import router, { Router, useRouter } from "next/router";

interface SolicitacoesProps{
  user: {
    nome: string,
    telefone: string,
    imagem_perfil: string,
    id: string
  },
  user_host: {
    nome: string,
    telefone: string,
    imagem_perfil: string,
    id: string
  },
  propriedade: {
    localizacao: {
      endereco: string,
      cidade: string,
      estado: string
    },
    titulo: string,
    fotos: Array<string>,
    id: string
  },
  periodo: {
    inicio: string,
    fim: string
  },
  _id: string,
  status: string,
  valor_total: number,
  pago: boolean,
  __v: number
}


let minhasSolicitacoes = [];
let hospedagensAceitas = [];
const GHCliente = () => {

  

  const [solicitacoes, setSolicitacoes] = useState<any>([]);
  const [isFound, setIsFound] = useState(false);
  const [isFound2, setIsFound2] = useState(false);
  

  async function loadData(){
    const api = setupApi();
    try{
      const result = await api.get(`/solicitacoes/recuperar/usuario?id=6269e837fc62aa367a36bbad&status=Pendente`);
      
      //setSolicitacoes(result.data.solicitacoes);
      minhasSolicitacoes = result.data.solicitacoes;
      console.log(minhasSolicitacoes);
      setIsFound(true);
    }catch (e) {
      console.log(e);
    }
    
  }

  async function loadHospedagensAceitas(){
    const api = setupApi();
    try{
      const result = await api.get(`/solicitacoes/recuperar/usuario?id=6269e837fc62aa367a36bbad&status=Aceita`);
      
      //setSolicitacoes(result.data.solicitacoes);
      hospedagensAceitas = result.data.solicitacoes;
      console.log(hospedagensAceitas);
      setIsFound2(true);
    }catch (e) {
      console.log(e);
    }
    
  }
  
  useEffect(() => {
    loadData();
    loadHospedagensAceitas();
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
            Gerenciamento de hospedagens  Cliente
          </div>

          <Title>Hospedagens que solicitei</Title>

          <Card>
            <div className="corpo">
              <div className="titulo">
                <h2>Cidade</h2>
                <h2>Chek-in</h2>
                <h2>Chek-out</h2>
                <h2>Valor</h2>
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
                        <BotaoCancelar background="#E32A51">Cancelar</BotaoCancelar>
                      </div> 
                    ) )
                    
                  }

                </>
                :
                <>
                  <div className="dados" >
                      <h3>S??o Francisco</h3>
                      <h3>29/05/22</h3>
                      <h3>02/06/22</h3>
                      <h3>R$ 110,00</h3>
                      <BotaoCancelar background="#E32A51">Cancelar</BotaoCancelar>
                    </div> 

                    <div className="dados">
                      <h3>S??o Francisco</h3>
                      <h3>29/05/22</h3>
                      <h3>02/06/22</h3>
                      <h3>R$ 110,00</h3>
                      <BotaoCancelar background="#E32A51">Cancelar</BotaoCancelar>
                    </div> 
                </>
              }


              
              {/*<div className="dados">
                <h3>S??o Paulo</h3>
                <h3>29/05/22</h3>
                <h3>02/06/22</h3>
                <h3>R$ 110,00</h3>
                <BotaoCancelar background="#E32A51">Cancelar</BotaoCancelar>
              </div> 
              <div className="dados">
                <h3>S??o Paulo</h3>
                <h3>29/05/22</h3>
                <h3>02/06/22</h3>
                <h3>R$ 110,00</h3>
                <BotaoCancelar background="#E32A51">Cancelar</BotaoCancelar>
              </div> 
              <div className="dados">
                <h3>S??o Paulo</h3>
                <h3>29/05/22</h3>
                <h3>02/06/22</h3>
                <h3>R$ 110,00</h3>
                <BotaoCancelar background="#E32A51">Cancelar</BotaoCancelar>
              </div> 
              <div className="dados">
                <h3>S??o Paulo</h3>
                <h3>29/05/22</h3>
                <h3>02/06/22</h3>
                <h3>R$ 110,00</h3>
                <BotaoCancelar background="#E32A51">Cancelar</BotaoCancelar>
            </div>*/} 

             
            </div>
          </Card>

          <Title>Hospedagens Aceitas</Title>

          <Card>
            <div className="corpo">
              <div className="titulo">
                <h2>Cidade</h2>
                <h2>Check-in</h2>
                <h2>Check-out</h2>
                <h2>Valor</h2>
                <h2>Pagamento</h2>
                <h2>Conversar</h2>
              </div>

              {isFound2 ?  
                <>
                  
                  {
                    hospedagensAceitas.map(x => (
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
                        {x.pago == true ?
                          <BotaoCancelar background="#33BB48">Pago</BotaoCancelar> 
                          : 
                          <BotaoCancelar 
                            background="#47568A"
                            onClick={ ()=> router.push(`/pagamento/${x._id}`)}
                            >
                            Pagar
                          </BotaoCancelar>
                       
                        }
                        <BotaoCancelar background="#E32A51">Conversar</BotaoCancelar>
                      </div> 
                    ) )
                    
                  }

                </>
                :
                <>
                  <div className="dados">
                    <h3>S??o Paulo</h3>
                    <h3>29/05/22</h3>
                    <h3>02/06/22</h3>
                    <h3>R$ 110,00</h3>
                    <BotaoCancelar background="#33BB48">Pago</BotaoCancelar>
                    <BotaoCancelar background="#E32A51">Conversar</BotaoCancelar>
                  </div> 

                  <div className="dados">
                    <h3>S??o Paulo</h3>
                    <h3>29/05/22</h3>
                    <h3>02/06/22</h3>
                    <h3>R$ 110,00</h3>
                    <BotaoCancelar background="#33BB48">Pago</BotaoCancelar>
                    <BotaoCancelar background="#E32A51">Conversar</BotaoCancelar>
                  </div> 
                </>
              }

              
             
            </div>
          </Card>
        </Corpo>

      </Container>
    );
  };
  
  export default GHCliente;