import Header from "../../components/Header";
import { Container, Corpo, MeuPerfil, Historico, BotaoAvaliar, Avaliado, Extra} from "../../styles/perfil";
import {IoStar} from 'react-icons/io5';


const Perfil = () => {

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
                                <BotaoAvaliar > <IoStar color="#F6CA2A" size={24}/>Avaliar</BotaoAvaliar>
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
            </Corpo>
        </Container>
    )
}

export default Perfil;