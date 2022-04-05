import Header from "../../components/Header";
import {Container, Corpo, LoginUsuario} from "../../styles/login";

const Login = () => {

    return (
      <Container>
        <Corpo>
          <Header></Header>
        </Corpo>

        <Corpo>
            <LoginUsuario>
                <img className="logo" src="../../images/logo-login.svg"/>
                <input className="email" placeholder="E-mail"></input>
                <img className="icon-email" src="../../icons/icon-email.svg"/>
                <input className="senha" type="password" placeholder="Senha"></input>
                <img className="icon-senha" src="../../icons/icon-senha.svg"/>

                <a href="/">Esqueci minha senha</a>

                <button className="login">Entrar</button>
                <button className="criar">Criar Conta</button>
            </LoginUsuario>
        </Corpo>
       
      </Container>
    );
  };
  
  export default Login;