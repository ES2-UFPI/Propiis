import Header from "../../components/Header";
import {Container, Corpo, Corpo2, Card, CardButtons, Input} from "../../styles/pagamento";
import { CgPushLeft } from 'react-icons/cg';
import router from "next/router";

const Pagamento = () => {

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
              <img src="/images/fotocasa.svg" alt="imagem"/>
              <div className="text">
                <p>Cidade: <h3>São Paulo</h3></p>
                <p>Titulo: <h3>Mansão em nitriesk</h3></p>
              </div>
            </div>
          </Card>

          <Card tam="300px">
            <h1>Informação de Preço</h1>
            <div className="texto-precos">
              <p>Xdiarias: <h3>R$150,00</h3></p>
              <p>XTaxa: <h3>R$50,00</h3></p>
              <hr/>
              <p>Total: <h3>R$500,00</h3></p>
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
            <button>
              Voltar
            </button>
            <button className="blue">
              Enviar
            </button>
          </div>

        </Corpo2>
        

       
      </Container>
    );
  };
  
  export default Pagamento;