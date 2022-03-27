import Link from "next/link";
import { useState } from "react";
import { Container, Body } from "./style";

const Header = () => {
  

  return (
    <Container>
      <Body>
        
        <div className="logo">
          <img src="./icons/logobranca.svg" alt="logo" id="logo"/>
          <h2>Reseve propriedades sem nenhuma complicação.</h2>
        </div>

        <div className="pages">
          
          <ul className="top">
            <li>Contato</li>
            <li>Funcionamento</li>
            <li>Mapa</li>
          </ul>

          <ul className="bottom">
            <li className="sem-borda">Termos de Uso</li>
            <li className="borda">Politica de privacidade</li>
            <li className="borda">Proteja sua privacidade</li>
          </ul>
        </div>
        
        <div className="redes-sociais">
          <div className="rede">
            <img src="./icons/instagram.svg" alt="icon"/>
            @propiis
          </div>
          <div className="rede" id="facebook">
            <img src="./icons/facebook.svg" alt="icon"/> 
            @propiis
          </div>
          <div className="rede">
            <img src="./icons/email.svg" alt="icon"/>
            @propiis
          </div>
          
          <button>
            <img src="./icons/whatsapp.svg" alt="icon"/>
            Enviar Whatsapp
          </button>
        </div>
      </Body>
    </Container>
  );
};

export default Header;
