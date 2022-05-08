import Header from "../../components/Header";
import { Button, ExtraModal} from "../../components/CardPropriedade/style";
import { Container, Corpo, MeuPerfil, Historico, BotaoAvaliar, Avaliado, Extra} from "../../styles/perfil";
import {IoStar} from 'react-icons/io5';
import { useEffect, useLayoutEffect, useState } from "react";

import React from "react";
import { MdStar } from "react-icons/md";

const Perfil = () => {
    

    const[open,setOpen] = useState(false);

    const [stars, setStars] = useState(5);   

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
                            <ul className="historico">
                                <img className="mini-foto" src="../../images/historico-img.svg"/>
                                <span>Maragogi - AL</span>
                                <h3 className="preco">R$: 1500</h3>
                                <BotaoAvaliar onClick={() => setOpen(true)}>
                                    <IoStar color="#F6CA2A" size={24}/> Avaliar
                                </BotaoAvaliar>
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
                            <ul className="historico">
                                <img className="mini-foto" src="../../images/historico-img.svg"/> 
                                <span>Maragogi - AL</span>
                                <h3 className="preco">R$: 1500</h3>
                                <Avaliado>
                                    <IoStar color="#F6CA2A" size={24}/>
                                    <IoStar color="#F6CA2A" size={24}/>
                                    <IoStar color="#F6CA2A" size={24}/>
                                    <IoStar color="#F6CA2A" size={24}/>
                                    <IoStar color="#C1BDAF" size={24}/>
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
                                    <IoStar color="#C1BDAF" size={24}/>
                                </Avaliado>
                            </ul>
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
