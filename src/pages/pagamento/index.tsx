import Header from "../../components/Header";
import {Container, Corpo, Corpo2} from "../../styles/pagamento";
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
        </Corpo2>
        
       
      </Container>
    );
  };
  
  export default Pagamento;