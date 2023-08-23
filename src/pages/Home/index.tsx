import { Container } from "../../Styles";
import BotaoAdicionar from "../../components/BotaoCadastrar";
import Cabecalho from "../../containers/Header";
import ListaContatos from "../../containers/ListaContatos";

const Home = () => (
  <>
    <Cabecalho />
    <Container>
      <ListaContatos />
    </Container>
    <BotaoAdicionar />
  </>
);

export default Home;
