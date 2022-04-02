import Link from "next/link";
import { useState } from "react";
import { Container, Geral } from "./style";

const Header = () => {
  const [logado, setLogado] = useState(true);
  const [openOp, setOpenOp] = useState(false);

  return (
    <Geral>
      <Container>
        <Link href="/">
          <img src="./icons/logo.svg" alt="logo" id="logo"/>
        </Link>
        
        <Link href="/">
          <li>Home</li>
        </Link>
 
        <Link href="/mapa">
          <li>Mapa</li>
        </Link>
        
        <div className="menu-opcoes" onClick={ logado? ()=> setOpenOp(!openOp) : null}>
          <div className="border-image">
            <img 
              src={logado == false? 
                "./icons/sem-perfil.svg" : 
                "./icons/logado.svg"
                } 
              alt="perfil"
            />
          </div>
          
          {logado ? 
            <text>Felipe torres</text>
            : <div className="space"></div>
          }

        </div>

      </Container>
      {openOp ?
        <ul className="opcoes">
          <li><a href="/perfil">Meu perfil</a></li>
          <li>Propriedades</li>
          <li>Favoritos</li>
          <li id="sair">Sair</li>
        </ul>
        :
        null
      }

    </Geral>
  );
};

export default Header;
