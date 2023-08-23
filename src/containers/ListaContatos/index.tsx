import { useSelector } from "react-redux";
import Contato from "../../components/Contato";
import { RootReducer } from "../../store";
import { ContainerContatos, Resultado } from "./styles";

const ListaContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contato);
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  const filtraContatos = () => {
    let contatosFiltrados = contatos;

    if (termo) {
      contatosFiltrados = contatos.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      );
    }
    return contatosFiltrados;
  };

  const lista = filtraContatos();

  return (
    <>
      {lista.length > 0 ? (
        <ul>
          <ContainerContatos>
            {lista.map((item) => (
              <li key={item.id}>
                <Contato
                  nome={item.nome}
                  email={item.email}
                  telefone={item.telefone}
                  id={item.id}
                />
              </li>
            ))}
          </ContainerContatos>
        </ul>
      ) : (
        <Resultado>Não há nenhum contato com este nome</Resultado>
      )}
    </>
  );
};

export default ListaContatos;
