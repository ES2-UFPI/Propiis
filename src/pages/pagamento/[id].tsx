import Header from "../../components/Header";
import {Container, Corpo, Corpo2, Card, CardButtons, Input} from "../../styles/pagamento";
import { CgPushLeft } from 'react-icons/cg';
import router from "next/router";
import { setupApi } from "../../services/api";
import { useEffect, useState } from "react";

const { id } = router.query;

let minhasSolicitacao;
const Pagamento = () => {

  const [isFound2, setIsFound2] = useState(false);

  async function infoSolicitacao(){
    const api = setupApi();
    try{
      const result = await api.get(`/solicitacoes/${id}`);
      
      //setSolicitacoes(result.data.solicitacoes);
      minhasSolicitacao = result.data.solicitacao;
      console.log(minhasSolicitacao);
      setIsFound2(true);
    }catch (e) {
      console.log(e);
    }
    
  }

  useEffect(() => {
    infoSolicitacao();
   },[])


  async function pagar(){
    const api = setupApi();
    try{
      const result = await api.put(`/solicitacoes/pagamento/${id}`,{ "pago": true});
      
      alert("pago com sucesso! \nRetornando você para pagina de gerenciamento");
      router.push("/gh-cliente");
      setIsFound2(true);
    }catch (e) {
      console.log(e);
    
    }
  
  }

  
    return (
      <Container>
        <Corpo>
          <Header></Header>
        </Corpo>
        <Corpo2>
          <div className="voltar" onClick={ () => router.push("/gh-cliente")}> 
            <CgPushLeft size={30}/> 
            Pagamento
          </div>

          <Card>
            <h1>Informação da viagem</h1>
            <div className="viagem">
              <img src={minhasSolicitacao?.propriedade?.fotos[0]} alt="imagem"/>
              <div className="text">
                <p>Cidade: <h3>{minhasSolicitacao?.propriedade?.localizacao?.cidade}</h3></p>
                <p>Titulo: <h3>{minhasSolicitacao?.propriedade?.titulo}</h3></p>
              </div>
            </div>
          </Card>

          <Card tam="300px">
            <h1>Informação de Preço</h1>
            <div className="texto-precos">
              <p>valor Geral: <h3>R$ {minhasSolicitacao?.valor_total}</h3></p>
              <hr/>
              <p>Total: <h3>R$ {minhasSolicitacao?.valor_total}</h3></p>
            </div>
          </Card>
          
          <CardButtons tam="600px">
            <button id="1">Crédito</button>
            <button>Boleto</button>
            <button id="2">pix</button>
          </CardButtons>

          <div className="inputs">
            <Input 
              id="0"
              tam="500px"
              placeholder="Cartão de Credito"
              disabled
            />

            <div className="grid">
              <Input 
                id="1"
                tam="500px"
                placeholder="Numero do Cartão"
              />
              <div className="duplo">
                <Input 
                  id="2"
                  tam="250px"
                  placeholder="Validade"
                />
                <Input 
                  id="3"
                  tam="250px"
                  placeholder="CVV"
                />
              </div>
            </div>

            <div className="coluna">
              <Input 
                tam="500px"
                placeholder="Nome"
              />
              <Input 
                tam="500px"
                placeholder="Sobrenome"
              />
              <Input 
                tam="500px"
                placeholder="CPF"
              />
            </div>
          </div>

          <div className="buttons">
            <button onClick={()=> router.push(`/gh-cliente`)}>
              Voltar
            </button>
            <button 
              className="blue"
              onClick={ ()=> pagar()}
            >
              Pagar
            </button>
          </div>

        </Corpo2>
        

       
      </Container>
    );
  };
  
  export default Pagamento;