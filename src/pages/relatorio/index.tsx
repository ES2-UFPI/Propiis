
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiArrowToLeft } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import Header from "../../components/Header";
import {Avaliado, BodyCard, Card, Card2, Container, H1, Lines, Space} from "../../styles/relatorio";

import {MdStar} from "react-icons/md";
import { setupApi } from "../../services/api";

let hospedagensAceitas = [];
let soma = 0;

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
    const[setIsFound,setIsFound2] = useState(false);
    
    const [stars, setStars] = useState(5);

    async function loadHospedagensAceitas(){
        const api = setupApi();
        try{
          const result = await api.get(`/solicitacoes/recuperar/host?id=6269e853fc62aa367a36bbaf&status=Aceita`);
          
          //setSolicitacoes(result.data.solicitacoes);
          hospedagensAceitas = result.data.solicitacoes;
          console.log(hospedagensAceitas);
          setIsFound2(true);
          
        }catch (e) {
          console.log(e);
        }
        
      }
    
      
      
      useEffect(() => {
        loadHospedagensAceitas();
       },[])
    

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
                    hospedagensAceitas.map( (x,i)=>{
                        return(
                            <Lines background={i%2 == 0?"#EBF3F5": undefined} key={i} >
                                <div className="left">
                                    <Space><img src="/images/casinha.svg"/></Space>
                                
                                    <Space><h2>{x.propriedade?.localizacao.cidade}</h2></Space>
                                    <Space><h2>R$ {x.valor_total}</h2></Space>
                                    <Space> <h3>{
                                        x.periodo.inicio[8] + "" + 
                                        x.periodo.inicio[9] + "/" +
                                        x.periodo.inicio[5] + "" +
                                        x.periodo.inicio[6] + "/" +
                                        x.periodo.inicio[0] + "" +
                                        x.periodo.inicio[1] + "" +
                                        x.periodo.inicio[2] + "" +
                                        x.periodo.inicio[3] + ""
                                    }</h3></Space>
                                    <Space><h3>{
                                        x.periodo.inicio[8] + "" + 
                                        x.periodo.inicio[9] + "/" +
                                        x.periodo.inicio[5] + "" +
                                        x.periodo.inicio[6] + "/" +
                                        x.periodo.inicio[0] + "" +
                                        x.periodo.inicio[1] + "" +
                                        x.periodo.inicio[2] + "" +
                                        x.periodo.inicio[3] + ""
                                    }</h3></Space>
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
                    {hospedagensAceitas.map(x=>{
                        soma = soma + x.valor_total;

                        return(
                            <div className="line">
                                {"Valor ganho"}
                                
                                <h3>R$ {x.valor_total}</h3> 
                            </div>)
                    })}
                </div>
                <hr />
                <div className="resultado">
                    TOTAL:
                    <h3>R$ {soma}</h3>
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