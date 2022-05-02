
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/Header";
import {Container, Corpo} from "../../styles/obrigado";

const Obrigado = () => {
    const router = useRouter();
    const  [contador, setContador] = useState(10);
    
    

    function contagemRegressiva(){
        setTimeout(() => setContador(contador-1), 1000);
        if(contador == 0){
            router.push('/gh-cliente');
        }
    }

    contagemRegressiva();

    return (
        <Container>
            <Header />

            <Corpo>
                <h2 id="principal">Obrigado por alugar com a gente   !!!</h2>
                <h2>Retornando automaticamente em: <b>{contador}</b>  </h2>

                <button onClick={()=> router.push("/gh-cliente") }>voltar</button>
            </Corpo>
        
        </Container>
    );
  };
  
  export default Obrigado;