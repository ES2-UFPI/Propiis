import Header from "../../components/Header";
import { Button, ExtraModal} from "../../components/CardPropriedade/style";
import { Container, Corpo, MeuPerfil, Historico, BotaoAvaliar, Avaliado, Extra} from "../../styles/perfil";
import {IoStar} from 'react-icons/io5';
import { useEffect, useLayoutEffect, useState } from "react";

import React from "react";
import { MdStar } from "react-icons/md";
import { setupApi } from "../../services/api";
import { BotaoCancelar } from "../../styles/ghCliente";
import router from "next/router";

let minhasSolicitacoes = [];
let hospedagensAceitas = [];
const Perfil = () => {
    

    const[open,setOpen] = useState(false);
   
    const [stars, setStars] = useState(5);   

    const [found, setFound] = useState(false);
    
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
                <Header></Header>
                <h1 className="titulo">Meu Perfil</h1>
            </Corpo>
            
            <div className="top">

                <MeuPerfil>
                    <img className="fotoPerfil" src="../../images/perfil-big.svg"/>
                    <button className="alterar-foto">
                        <img src="../../icons/icon-alterar-foto.svg"/>
                    </button>
                    <h2 className="nome">Felipe Torres</h2>
                    <ul className="dados">
                        <li>Email</li>
                        <li>Telefone</li>
                        <li>CPF</li>
                    </ul>
                    <ul className="pessoal">
                        <li>felipeTorres@gmail.com</li>
                        <li>(89) 9999-99999</li>
                        <li>044000400-00</li>
                    </ul>
                    <button className="editar">
                        Editar
                        <img className="icon-editar" src="../../icons/icon-editar.svg"/>
                    </button>
                    <button className="alterar">Alterar Senha</button>
                </MeuPerfil>
            

                <div className="viagens">
                    <h2>Minhas Viagens</h2>
                    <ul className="icons">
                        <img src="../../icons/agenda.svg"/> 
                        <li>Agendadas</li>
                        
                    </ul>
                    <ul className="icons">
                        <img src="../../icons/coracao.svg"/>
                        <li>Favoritas</li>
                    </ul>
                </div>
                
            </div>


            
            <Corpo>
                <h1 className="titulo">Histórico de viagens</h1>
                <Extra>
                    <Historico>
                        <ul>
                        
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
                    <BotaoCancelar background="#33BB48">Pago</BotaoCancelar>
                    <BotaoCancelar background="#E32A51">Conversar</BotaoCancelar>
                  </div> 
                </>
              }
                            
                        </ul>
                    </Historico>
                </Extra>
                {open?(
                    <div id="modal-info" className="modal-container">
                        <div className="modal">
                        <button className="fechar" onClick={() => setOpen(false)}> X </button>
                        <h3>Feedback</h3>
                            <div className="avaliacao">
                            <Avaliado>
                                {Array(5).fill(0).map((_, idx) => {
                                    return idx < stars ? (
                                        <MdStar color="#F6CA2A" onClick={() => setStars(idx+1)} size={24} />
                                    ) : (
                                        <MdStar color="#C1BDAF" onClick={() => setStars(idx+1)} size={24} />
                                    )
                                })}
                            </Avaliado>
                            </div>
                        <h3>Comentários</h3>
                            <div className="comentario">
                                <textarea placeholder="Deixe um comentário..."></textarea>
                            </div>
                        <div className="botaoAvaliar">
                            <button className="botao-avaliar">Avaliar</button>
                        </div>
                        </div>
                    </div>)

                :null}    
            </Corpo>
        </Container>
    )
}

export default Perfil;
