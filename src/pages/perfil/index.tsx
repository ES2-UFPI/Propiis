import Header from "../../components/Header";
import { Container, Corpo, MeuPerfil, Historico} from "../../styles/perfil";


const Perfil = () => {

    return (
        <Container>
            <Corpo>
                <Header></Header>
            </Corpo>
            <div className="perfil">Meu Perfil</div>
            <div className="top">

            <Corpo>
                <MeuPerfil>
                    <img className="fotoPerfil" src="../../images/perfil-big.svg"/>
                    <button className="alterar-foto"><img src="../../icons/icon-alterar-foto.svg"/></button>
                    <div className="nome">Felipe Torres</div>
                    <ul className="dados">
                        <li>Email</li>
                        <li>Telefone</li>
                        <li>CPF</li>
                    </ul>
                    <ul className="pessoal">
                        <li>felipeTorres@gmail.com</li>
                        <li>(89) 9999-99999</li>
                        <li>044000400-00</li>
                    </ul>
                    <button className="editar">Editar<img className="icon-editar" src="../../icons/icon-editar.svg"/></button>
                    <button className="alterar">Alterar Senha</button>
                </MeuPerfil>
            </Corpo>

            <div className="minhas-viagens">Minhas Viagens</div>
            <ul className="icons-agendadas-favoritas">
                <li><img src="../../icons/agenda.svg"/> </li>
                <li><img src="../../icons/coracao.svg"/></li>
            </ul>
            <ul className="agendadas-favoritas">
                <li>Agendadas</li>
                <li>Favoritas</li>
            </ul>
            </div>

            <div className="hist">Histórico de viagens</div>
            <Corpo>
                <Historico>
                <ul>
                    <ul className="historico">
                        <li><img className="mini-foto" src="../../images/historico-img.svg"/> </li>
                        <li>Maragogi - AL</li>
                        <li className="preco">R$: 1500</li>
                    </ul>

                    <ul className="historico">
                        <li><img className="mini-foto" src="../../images/historico-img.svg"/> </li>
                        <li>Maragogi - AL</li>
                        <li className="preco">R$: 1500</li>
                    </ul>
                </ul>
                </Historico>
            </Corpo>
        </Container>
    )
}

export default Perfil;