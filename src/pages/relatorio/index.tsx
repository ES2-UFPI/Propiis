
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiArrowToLeft } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import Header from "../../components/Header";
import {Avaliado, BodyCard, Card, Card2, Container, H1, Lines, Space} from "../../styles/relatorio";

import {MdStar} from "react-icons/md";

const Obrigado = () => {

    const [relatorio, setRelatorio] = useState([
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"},
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"},
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"},
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"},
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"},
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"}
    ]);
    const[open,setOpen] = useState(false);

    const [stars, setStars] = useState(5);
    return (
        <Container>
            <div className="voltar">
                <Link href="/"> 
                    <a>            
                        <BiArrowToLeft  size={30} id="icon-voltar"/> 
                    </a>
                </Link>
                Relatório Geral
            </div>

            <H1> Histórico de  viagens </H1>

            <Card>
                <div className="title">
                    <div className="left">
                        <Space>Lugar</Space>
                        <Space></Space>
                        <Space></Space>
                        <Space>Check-in</Space>
                        <Space>Check-out</Space>
                    </div>
                    <Space>
                        Avaliação
                    </Space>
                </div>
                <BodyCard>
                    
                {
                    relatorio.map( (x,i)=>{
                        return(
                            <Lines background={i%2 == 0?"#EBF3F5": undefined} key={i} >
                                <div className="left">
                                    <Space><img src="/images/casinha.svg"/></Space>
                                
                                    <Space><h2>Maragogi - AL</h2></Space>
                                    <Space><h2>R$ 1500,00</h2></Space>
                                    <Space> <h3>29/05/22</h3></Space>
                                    <Space><h3>29/05/22</h3></Space>
                                </div>
                                
                                <Space>
                                    <button onClick={()=>setOpen(true)}>
                                        <IoStar color="#F6CA2A" size={24}/>
                                        Avaliar hóspede
                                    </button>
                                </Space>
                            </Lines>
                        )
                    })
                }
                   
                </BodyCard>
            </Card>

            <Card2>
                <h1>Recebido no total</h1>
                <div className="corpo">
                    <div className="line">
                        {"4x Diária R$ 300,00"}
                         
                        <h3>R$ 1200,00</h3> 
                    </div>
                    <div className="line">
                        4x Diária R$ 300,00 
                        <h3>R$ 1200,00</h3>
                    </div>
                    <div className="line">
                        4x Diária R$ 300,00 
                        <h3>R$ 1200,00</h3>
                    </div>
                    <div className="line">
                        4x Diária R$ 300,00 
                        <h3>R$ 1200,00</h3>
                    </div>
                    <div className="line">
                        4x Diária R$ 300,00 
                        <h3>R$ 1200,00</h3>
                    </div>
                </div>
                <hr />
                <div className="resultado">
                    TOTAL:
                    <h3>R$ 5000,00</h3>
                </div>
            </Card2>
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
        </Container>
    );
  };
  
  export default Obrigado;