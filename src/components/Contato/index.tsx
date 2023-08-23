import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BotaoCancelar,
  BotaoEditar,
  BotaoExcluir,
  BotaoSalvar,
  ContainerBotoes,
  ContainerContato,
  Edita,
  Email,
  Nome,
  Telefone,
} from "./styles";
import ContatoClass from "../../models/contato";
import { editar, excluir } from "../../store/reducers/contato";

type Props = ContatoClass;

const Contato = ({
  nome: nomeInicial,
  email: emailInicial,
  telefone: telefoneInicial,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    if (nomeInicial.length >= 0) {
      setNome(nomeInicial);
    }
    if (telefoneInicial.length >= 0) {
      setTelefone(telefoneInicial);
    }
    if (emailInicial.length >= 0) {
      setEmail(emailInicial);
    }
  }, [nomeInicial, emailInicial, telefoneInicial]);

  const salvarContato = () => {
    dispatch(editar({ nome, telefone, email, id }));
    setEstaEditando(false);
  };

  const cancelaEdicao = () => {
    setEmail(emailInicial);
    setNome(nomeInicial);
    setTelefone(telefoneInicial);
    setEstaEditando(false);
  };

  return (
    <ContainerContato>
      {estaEditando ? (
        <Edita
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      ) : (
        <Nome type="text" value={nome} disabled={!estaEditando} />
      )}
      {estaEditando ? (
        <Edita value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      ) : (
        <Telefone type="tel" value={telefone} />
      )}
      {estaEditando ? (
        <Edita value={email} onChange={(e) => setEmail(e.target.value)} />
      ) : (
        <Email type="email" value={email} />
      )}
      <ContainerBotoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarContato}>Salvar</BotaoSalvar>
            <BotaoCancelar onClick={cancelaEdicao}>Cancelar</BotaoCancelar>
          </>
        ) : (
          <>
            <BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </BotaoEditar>
            <BotaoExcluir onClick={() => dispatch(excluir(id))}>
              Excluir
            </BotaoExcluir>
          </>
        )}
      </ContainerBotoes>
    </ContainerContato>
  );
};

export default Contato;
