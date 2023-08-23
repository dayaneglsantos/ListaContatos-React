import { useSelector } from "react-redux";
import Filtro from "../../components/Filtro";
import { Header, Titulo } from "./styles";
import { RootReducer } from "../../store";

const Cabecalho = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contato);

  return (
    <Header>
      <Titulo>Você possui {contatos.length} contatos</Titulo>
      <Filtro />
    </Header>
  );
};

export default Cabecalho;
