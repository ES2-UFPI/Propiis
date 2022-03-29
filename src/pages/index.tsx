import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Corpo, Pesquisa, Sugestoes } from "../styles/home";

const Home: NextPage = () => {

  return (
    <Container>
      <Corpo>
        <Header></Header>
      </Corpo>

      <img className="fotohome" src="./images/background-pic.svg" alt="" />

      <Corpo>
        <Pesquisa>
          <div className="filtro">Localização? <input placeholder="Ex: Rio de Janeiro"></input></div>
          <div className="filtro">Check-in? <input placeholder="Quando?"></input></div>
          <div className="filtro">Check-out? <input placeholder="Quando?"></input></div>
          <div className="filtro">Hóspedes <input placeholder="Alugar"></input></div>
          <button>Buscar</button>
        </Pesquisa>

          <Sugestoes>
            <div className="texto">Encontre os melhores imóveis para o seu conforto</div>
            <div className="texto_menor">Dê uma olhada em algumas sugestões</div>
          </Sugestoes>

      </Corpo>

      <Footer></Footer>
    </Container>

    

  );
};

export default Home;
