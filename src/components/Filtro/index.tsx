import { useDispatch } from "react-redux";
import { BotãoPesquisa, CampoPesquisa, ContainerPesquisa } from "./styles";
import { setTermo } from "../../store/reducers/filtro";
import { FormEvent, useState } from "react";

const Filtro = () => {
  const dispatch = useDispatch();
  const [termoBusca, setTermoBusca] = useState("");

  const clickBuscar = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setTermo(termoBusca));
  };

  return (
    <ContainerPesquisa>
      <form>
        <CampoPesquisa
          placeholder="Digite sua busca"
          onChange={(e) => setTermoBusca(e.target.value)}
        />
        <BotãoPesquisa onClick={clickBuscar}>Buscar</BotãoPesquisa>
      </form>
    </ContainerPesquisa>
  );
};

export default Filtro;
