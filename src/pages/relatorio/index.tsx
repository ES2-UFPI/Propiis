
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiArrowToLeft } from "react-icons/bi";
import Header from "../../components/Header";
import {Card, Container, H1, Space} from "../../styles/relatorio";

const Obrigado = () => {
    

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
                        <Space>{""}</Space>
                        <Space>{""}</Space>
                        <Space>Check-in</Space>
                        <Space>Check-out</Space>
                    </div>
                    <Space>
                        Avaliação
                    </Space>
                </div>
            </Card>
        </Container>
    );
  };
  
  export default Obrigado;