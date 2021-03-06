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
let avaliacoes = [];
const Perfil = () => {
    

    const[open,setOpen] = useState(false);
   
    const [stars, setStars] = useState(5);   

    const [found, setFound] = useState(false);
    
    const [isFound, setIsFound] = useState(false);
    const [isFound2, setIsFound2] = useState(false);

    const [ comentario, setComentario] = useState("");

    const [idPropriedade, setIdPropriedade] = useState("");
    const [nomeUser, setNomeUser] = useState("");
    const [ idusuario, setIdUsuario] = useState("");

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
    
    function exibirEstrelas(n){
        let array = [];
        if(n <= 0){
            n = 5;
        }
        for(let i = 0; i < 5; i++){
            if(i < n){
                array.push(<IoStar color="#F6CA2A" size={24}/>);
            }else{
                array.push(<IoStar color="#b6b5b3" size={24}/>);
            }
        }
        return array;
    }

    async function enviarAvaliacao(){
        const api = setupApi();
        try{
          const result = await api.put(`/propriedades/avaliar/${idPropriedade}`, 
            { 
                "avaliacao": {
                    "nome": "Marcos",
                    "email": "tiagorocha.tr16@gmail.com",
                    "estrelas": stars,
                    "comentario": comentario,
                    "id_user": "6269e837fc62aa367a36bbad"
                },
            }
          
          );
          
          setIdPropriedade("");
          setOpen(false);
          setStars(5);
          router.reload();
        }catch (e) {
          console.log(e);
        }
        
    }


    function  abrirModal(id,nome, idUser){
        setIdPropriedade(id);
        setNomeUser(nome);
        setIdUsuario(idUser);
        setOpen(true);
    }

    function fecharModal(){
        setIdPropriedade("");
        setStars(5);
        setComentario("");
        setOpen(false);
    }

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
                    <ul>
                        <li className="propbits">Propibits: 5500</li>
                    </ul>
                </div>
                
            </div>


            
            <Corpo>
                <h1 className="titulo">Hist??rico de viagens</h1>
                <Extra>
                    <Historico>
                        <ul>
                        
                        {isFound2 ?  
                <>
                  
                  {
                    hospedagensAceitas.map(x => (

                        <ul className="historico" key={x._id}>
                            <img className="mini-foto" src={ x.propriedade?.fotos[0] != "" ? x.propriedade?.fotos[0] : "/images/casinha.svg" }/>
                            <span>{x.propriedade.localizacao.cidade}</span>
                            <h3 className="preco">R$ {x.valor_total}</h3>
                            {x.estrelas == -1 ? 
                                <BotaoAvaliar onClick={() => abrirModal(x.propriedade?.id, x.user?.nome, x.user?.id)}>
                                    <IoStar color="#F6CA2A" size={24}/> Avaliar
                                    
                                </BotaoAvaliar>
                                : 
                                <Avaliado>
                                    { 
                                       exibirEstrelas(x.estrelas)
                                    }
                                </Avaliado>
                            }
                            
                        </ul>

                    
                    ) )
                    
                  }

                </>
                :
                <>
                    <ul className="historico">
                        <img className="mini-foto" src="../../images/historico-img.svg"/> 
                        <span>Maragogi - AL</span>
                        <h3 className="preco">R$: 1500</h3>
                        <Avaliado>
                            
                            <IoStar color="#F6CA2A" size={24}/>
                            <IoStar color="#F6CA2A" size={24}/>
                            <IoStar color="#F6CA2A" size={24}/>
                            <IoStar color="#F6CA2A" size={24}/>
                            <IoStar color="#F6CA2A" size={24}/>
                        </Avaliado>
                    </ul>

                    <ul className="historico">
                        <img className="mini-foto" src="../../images/historico-img.svg"/> 
                        <span>Maragogi - AL</span>
                        <h3 className="preco">R$: 1500</h3>
                        <Avaliado>
                            <IoStar color="#F6CA2A" size={24}/>
                            <IoStar color="#F6CA2A" size={24}/>
                            <IoStar color="#F6CA2A" size={24}/>
                            <IoStar color="#F6CA2A" size={24}/>
                            <IoStar color="#F6CA2A" size={24}/>
                        </Avaliado>
                    </ul>

                 
                </>
              }
                            
                        </ul>
                    </Historico>
                </Extra>
                {open?(
                    <div id="modal-info" className="modal-container">
                        <div className="modal">
                        <button className="fechar" onClick={() => fecharModal()}> X </button>
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
                        <h3>Coment??rios</h3>
                            <div className="comentario">
                                <textarea 
                                    placeholder="Deixe um coment??rio..."
                                    value ={ comentario}
                                    onChange = { (e) => setComentario(e.target.value)}
                                >

                                </textarea>
                            </div>
                        <div className="botaoAvaliar">
                            <button 
                                className="botao-avaliar"
                                onClick={ () => enviarAvaliacao()}
                            >
                                Avaliar
                            </button>
                        </div>
                        </div>
                    </div>)

                :null}    
            </Corpo>
        </Container>
    )
}

export default Perfil;
