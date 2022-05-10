
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiArrowToLeft } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import Header from "../../components/Header";
import {BodyCard, Card, Card2, Container, H1, Lines, Space} from "../../styles/relatorio";

const Obrigado = () => {

    const [relatorio, setRelatorio] = useState([
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"},
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"},
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"},
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"},
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"},
        {lugar:"Maragogi - AL",preco:1500,checkIn:"29/05/22",checkOut:"29/05/22"}
    ]);

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
                                    <button>
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
        </Container>
    );
  };
  
  export default Obrigado;